from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import ShoppingCart  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import ShoppingCartSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def create_shopping_cart(request):
    if request.method == 'POST':
        serializer = ShoppingCartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_shopping_cart(request, cart_id):
    shopping_cart = get_object_or_404(ShoppingCart, cart_id=cart_id)

    serializer = ShoppingCartSerializer(shopping_cart, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_shopping_cart(request, cart_id):
    shopping_cart = ShoppingCart.objects.filter(cart_id=cart_id).first()

    if not shopping_cart:
        return Response({'message': 'Shopping Cart not found'}, status=404)

    serializer = ShoppingCartSerializer(shopping_cart)
    return Response(serializer.data)

@api_view(['GET'])
def get_shopping_cart_user(request, user_id):
    shopping_carts = ShoppingCart.objects.filter(user__user_id=user_id)
    serializer = ShoppingCartSerializer(shopping_carts, many=True)

    return Response(serializer.data)