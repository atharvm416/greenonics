from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from greenonicsapp.models import UserDetails, ShoppingCart  # Adjust the import path based on your actual file structure
from greenonicsapp.serializers import UserDetailsSerializer, ShoppingCartSerializer  # Adjust the import path based on your actual file structure
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

class UserDetailView(View):
    def get(self, request, *args, **kwargs):
        user_id = kwargs.get('user_id') 
        user = get_object_or_404(UserDetails, user_id=user_id)
        serializer = UserDetailsSerializer(user)
        return JsonResponse(serializer.data)

class UserDetailLogin(View):
    def get(self, request, *args, **kwargs):
        try:
            email = kwargs.get('email')
            password = kwargs.get('password')
            
            # Validate user credentials
            user = get_object_or_404(UserDetails, email=email, password=password)
            
            # Retrieve the latest active shopping cart for the user
            cart = ShoppingCart.objects.filter(user=user, status='active').order_by('-created_at').first()
            
            # Serialize user and cart data
            user_serializer = UserDetailsSerializer(user)
            cart_serializer = ShoppingCartSerializer(cart)
            
            return JsonResponse({'user': user_serializer.data, 'cart': cart_serializer.data})
        except UserDetails.DoesNotExist:
            return JsonResponse({'error': 'Invalid email or password'}, status=400)
        except ShoppingCart.DoesNotExist:
            return JsonResponse({'error': 'No active cart found for the user'}, status=400)

    

class UserListView(View):
    def get(self, request):
        users = UserDetails.objects.all()
        serializer = UserDetailsSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        user_serializer = UserDetailsSerializer(data=request.data)
        if user_serializer.is_valid():
            # Save the user
            user_serializer.save()

            # Create a new shopping cart for the user
            ShoppingCart.objects.create(user=user_serializer.instance, status='active', total_amount=0.0)

            # Serialize the user and shopping cart data
            response_data = {
                'user': user_serializer.data,
                'shopping_cart': ShoppingCartSerializer(user_serializer.instance.shoppingcart_set.last()).data,
            }

            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


@api_view(['PUT'])
def update_user(request, user_id):
    user = get_object_or_404(UserDetails, user_id=user_id)

    serializer = UserDetailsSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_user(request, user_id):
    user = get_object_or_404(UserDetails, user_id=user_id)
    user.delete()
    return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)