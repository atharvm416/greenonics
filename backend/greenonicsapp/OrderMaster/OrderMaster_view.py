from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import OrderMaster  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import OrderMasterSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        serializer = OrderMasterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_order(request, order_id):
    order = get_object_or_404(OrderMaster, order_id=order_id)

    serializer = OrderMasterSerializer(order, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_order(request, order_id):
    order = get_object_or_404(OrderMaster, order_id=order_id)
    serializer = OrderMasterSerializer(order)
    return Response(serializer.data)

@api_view(['GET'])
def get_orders_by_user(request, user_id):
    orders = OrderMaster.objects.filter(user__user_id=user_id)
    serializer = OrderMasterSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_order(request, order_id):
    order = get_object_or_404(OrderMaster, order_id=order_id)
    order.delete()
    return Response({'message': 'Order deleted successfully'}, status=status.HTTP_204_NO_CONTENT)