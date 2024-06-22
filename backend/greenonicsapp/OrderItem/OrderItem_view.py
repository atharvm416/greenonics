from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import OrderItem  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import OrderItemSerializer,ProductSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def create_order_item(request):
    if request.method == 'POST':
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_order_item(request, order_item_id):
    order_item = get_object_or_404(OrderItem, order_item_id=order_item_id)

    serializer = OrderItemSerializer(order_item, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_order_item(request, order_item_id):
    order_item = get_object_or_404(OrderItem, order_item_id=order_item_id)
    serializer = OrderItemSerializer(order_item)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_order_item(request, order_item_id):
    order_item = get_object_or_404(OrderItem, order_item_id=order_item_id)
    order_item.delete()
    return Response({'message': 'OrderItem deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_order_items_by_order_id(request, order_id):
    order_items = OrderItem.objects.filter(order__order_id=order_id)
    
    # Serialize order items with product details
    response_data = []
    for order_item in order_items:
        # Serialize order item details
        order_item_serializer = OrderItemSerializer(order_item)
        serialized_order_item = order_item_serializer.data

        # Serialize product details for the current order item
        product_serializer = ProductSerializer(order_item.product)
        serialized_product = product_serializer.data

        # Include product details within the order item details
        serialized_order_item['product'] = serialized_product

        # Include order item in the response
        response_data.append(serialized_order_item)
    
    return Response(response_data)
