# greenonicsapp/urls.py
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .userdetails.user_details_views import UserListView, UserDetailView, create_user, UserDetailLogin, update_user, delete_user
from .DeliveryAddress.DeliveryAddress_view import create_delivery_address,update_delivery_address, get_delivery_address, delete_delivery_address, get_delivery_address_from_user
from .ProductCategory.product_category_views import create_product_category,get_all_categories,update_product_category, delete_product_category
from .Product.product_views import create_product,update_product,get_products_by_category, get_product, product_search
from .ShoppingCart.ShoppingCart_view import create_shopping_cart, update_shopping_cart, get_shopping_cart, get_shopping_cart_user
from .CartItem.CartItem_view import create_cart_item,update_cart_item, get_cart_item, delete_cart_item, get_cart_items_by_cart_id
from .OrderMaster.OrderMaster_view import create_order, update_order, get_order, delete_order, get_orders_by_user
from .OrderItem.OrderItem_view import create_order_item, update_order_item, get_order_item, delete_order_item,get_order_items_by_order_id
from .OrderDelivery.OrderDelivery_view import create_order_delivery,update_order_delivery, get_order_delivery, delete_order_delivery, get_orders_by_order_id

urlpatterns = [
    #user details
    path('users/', UserListView.as_view(), name='user-list'), #all users
    path('users/<int:user_id>/', UserDetailView.as_view(), name='user-detail'), #specific userdetails
    path('create_user/', create_user, name='create_user'), #create new user
    path('users/login/<str:email>/<str:password>/', UserDetailLogin.as_view(), name='user-login'), #login successful
    path('users/updatedetail/<int:user_id>/', update_user, name='user-detail-update'), #update details of user
    path('users/deleteuser/<int:user_id>/', delete_user, name='user-delete'), # delete user
    
    #delivery address
    path('delivery_address/create/', create_delivery_address, name='create_delivery_address'),
    path('delivery_address/update/<int:address_id>/', update_delivery_address, name='update_delivery_address'),
    path('delivery_address/<int:address_id>/', get_delivery_address, name='get_delivery_address'),
    path('delivery_address/useraccess/<int:user_id>/', get_delivery_address_from_user, name='get_delivery_address_from_user'),
    path('delivery_address/delete/<int:address_id>/', delete_delivery_address, name='delete_delivery_address'),

    #product category
    path('product_category/', get_all_categories, name='product_category-list'), #all product_category
    path('product_category/create/', create_product_category, name='create_product_category'), #create new product category
    path('product_category/update/<int:category_id>/', update_product_category, name='update-product-category'), #update product category
    path('product_category/delete/<int:category_id>/', delete_product_category, name='delete-product-category'), #delete product category
    
    # product 
    path('product/create/', create_product, name='create_product'), #create new product  - product name, availablity, 
    path('product/update/<int:product_id>/', update_product, name='update_product'),  #update product
    path('product/by_category/<int:category_id>/', get_products_by_category, name='get-products-by-category'), #get product by category
    path('product/<int:product_id>/', get_product, name='get_product'),  #update product
    path('product/search/', product_search, name='api_product_search'), # search product
    

    #Shopping Cart
    path('shopping_cart/create/', create_shopping_cart, name='create_shopping_cart'), 
    path('shopping_cart/update/<int:cart_id>/', update_shopping_cart, name='update_shopping_cart'),
    path('shopping_cart/<int:cart_id>/', get_shopping_cart, name='get_shopping_cart'),
    path('shopping_cart/users/<int:user_id>/', get_shopping_cart_user, name='get_shopping_cart_user'),


    #cart item
    path('cart_item/create/', create_cart_item, name='create_cart_item'),
    path('cart_item/update/<int:cart_item_id>/', update_cart_item, name='update_cart_item'),
    path('cart_item/<int:cart_item_id>/', get_cart_item, name='get_cart_item'),
    path('cart_item/delete/<int:cart_item_id>/', delete_cart_item, name='delete_cart_item'),
    path('cart_item/shopping_cart/<int:cart_id>/', get_cart_items_by_cart_id, name='get_cart_items_by_cart_id'),

    #Order master
    path('order/create/', create_order, name='create_order'),
    path('order/update/<int:order_id>/', update_order, name='update_order'),
    path('order/<int:order_id>/', get_order, name='get_order'),
    path('order/delete/<int:order_id>/', delete_order, name='delete_order'),
    path('order/bysuer/<int:user_id>/', get_orders_by_user, name='get_orders_by_user'),

    #Order Item
     path('order_item/create/', create_order_item, name='create_order_item'),
    path('order_item/update/<int:order_item_id>/', update_order_item, name='update_order_item'),
    path('order_item/<int:order_item_id>/', get_order_item, name='get_order_item'),
    path('order_item/delete/<int:order_item_id>/', delete_order_item, name='delete_order_item'),
    path('order_item/getproduct/<int:order_id>/', get_order_items_by_order_id, name='get_order_items_by_order_id'),

    #Order Delivery
    path('order_delivery/create/', create_order_delivery, name='create_order_delivery'),
    path('order_delivery/update/<int:delivery_id>/', update_order_delivery, name='update_order_delivery'),
    path('order_delivery/<int:delivery_id>/', get_order_delivery, name='get_order_delivery'),
    path('order_delivery/delete/<int:delivery_id>/', delete_order_delivery, name='delete_order_delivery'),
    path('order_delivery/byorder/<int:order_id>/', get_orders_by_order_id, name='get_orders_by_order_id'),
]