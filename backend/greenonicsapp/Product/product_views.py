from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import Product # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import ProductSerializer # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.db.models import Q

@api_view(['POST'])
def create_product(request):
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['PUT'])
def update_product(request, product_id):
    product = get_object_or_404(Product, product_id=product_id)

    serializer = ProductSerializer(product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_products_by_category(request, category_id):
    products = Product.objects.filter(product_category__category_id=category_id)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, product_id):
    products = Product.objects.filter(product_id=product_id)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_search(request):
    search_query = request.GET.get('search_query', '')

    # Debug: Print search query
    print('Search Query:', search_query)

    # Perform case-insensitive search on product_name
    products = Product.objects.filter(Q(product_name__icontains=search_query) & Q(status='active'))
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)
