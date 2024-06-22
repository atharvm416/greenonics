from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import CartItem, Product  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import CartItemSerializer, ProductSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_list_or_404

@api_view(['POST'])
def create_cart_item(request):
    if request.method == 'POST':
        serializer = CartItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_cart_item(request, cart_item_id):
    cart_item = get_object_or_404(CartItem, cart_item_id=cart_item_id)

    serializer = CartItemSerializer(cart_item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_cart_item(request, cart_item_id):
    cart_item = get_object_or_404(CartItem, cart_item_id=cart_item_id)
    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_cart_item(request, cart_item_id):
    cart_item = get_object_or_404(CartItem, cart_item_id=cart_item_id)
    cart_item.delete()
    return Response({'message': 'CartItem deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_cart_items_by_cart_id(request, cart_id):
    # Get list of CartItems
    cart_items = get_list_or_404(CartItem, cart_id=cart_id)

    # Create a list to store serialized data
    serialized_data = []

    # Iterate through each CartItem and fetch associated Product details
    for cart_item in cart_items:
        product = get_object_or_404(Product, product_id=cart_item.product.product_id)
        
        # Serialize both CartItem and Product
        cart_item_serializer = CartItemSerializer(cart_item)
        product_serializer = ProductSerializer(product)

        # Combine the serialized data
        serialized_data.append({
            **cart_item_serializer.data,
            'product': product_serializer.data,
        })

    return Response(serialized_data)