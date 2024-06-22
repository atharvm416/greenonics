from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import DeliveryAddress, UserDetails  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import DeliveryAddressSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_list_or_404
from django.http import Http404

@api_view(['POST'])
def create_delivery_address(request):
    if request.method == 'POST':
        serializer = DeliveryAddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_delivery_address(request, address_id):
    delivery_address = get_object_or_404(DeliveryAddress, address_id=address_id)

    serializer = DeliveryAddressSerializer(delivery_address, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_delivery_address(request, address_id):
    delivery_address = get_object_or_404(DeliveryAddress, address_id=address_id)
    serializer = DeliveryAddressSerializer(delivery_address)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_delivery_address(request, address_id):
    delivery_address = get_object_or_404(DeliveryAddress, address_id=address_id)
    delivery_address.delete()
    return Response({'message': 'Delivery Address deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_delivery_address_from_user(request, user_id):
    try:
        user = get_object_or_404(UserDetails, user_id=user_id)
        delivery_addresses = get_list_or_404(DeliveryAddress, user=user)
        serializer = DeliveryAddressSerializer(delivery_addresses, many=True)
        return Response(serializer.data)
    except Http404:
        raise Http404("User does not exist")