from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import OrderDelivery  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import OrderDeliverySerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import Http404

@api_view(['POST'])
def create_order_delivery(request):
    if request.method == 'POST':
        serializer = OrderDeliverySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_order_delivery(request, delivery_id):
    order_delivery = get_object_or_404(OrderDelivery, delivery_id=delivery_id)

    serializer = OrderDeliverySerializer(order_delivery, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_order_delivery(request, delivery_id):
    order_delivery = get_object_or_404(OrderDelivery, delivery_id=delivery_id)
    serializer = OrderDeliverySerializer(order_delivery)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_order_delivery(request, delivery_id):
    order_delivery = get_object_or_404(OrderDelivery, delivery_id=delivery_id)
    order_delivery.delete()
    return Response({'message': 'OrderDelivery deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_orders_by_order_id(request, order_id):
    try:
        order_deliveries = OrderDelivery.objects.filter(order__order_id=order_id)
    except OrderDelivery.DoesNotExist:
        raise Http404("No deliveries found for the specified order_id")

    serializer = OrderDeliverySerializer(order_deliveries, many=True)
    return Response(serializer.data)