from django.contrib import admin
from .models import UserDetails, ProductCategory, Product, ShoppingCart, CartItem, OrderMaster,DeliveryAddress, OrderItem, OrderDelivery


admin.site.register(UserDetails)
admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(ShoppingCart)
admin.site.register(CartItem)
admin.site.register(OrderMaster)
admin.site.register(DeliveryAddress)
admin.site.register(OrderItem)
admin.site.register(OrderDelivery)