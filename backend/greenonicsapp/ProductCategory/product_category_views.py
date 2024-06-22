from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import ProductCategory  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import ProductCategorySerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def create_product_category(request):
    if request.method == 'POST':
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_categories(request):
    if request.method == 'GET':
        categories = ProductCategory.objects.all()
        serializer = ProductCategorySerializer(categories, many=True)
        return Response(serializer.data)
    

@api_view(['PUT'])
def update_product_category(request, category_id):
    category = get_object_or_404(ProductCategory, category_id=category_id)

    serializer = ProductCategorySerializer(category, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_product_category(request, category_id):
    category = get_object_or_404(ProductCategory, category_id=category_id)
    category.delete()
    return Response({'message': 'Category deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
