from django.db import models

class UserDetails(models.Model):
    USER_CATEGORIES = [
        ('admin', 'Admin'),
        ('customer', 'Customer'),
    ]

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # Note: You should use a secure method to store passwords, consider using Django's built-in User model for authentication.
    phone_no = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    state = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
    registered_on = models.DateTimeField(auto_now_add=True)
    user_category = models.CharField(max_length=10, choices=USER_CATEGORIES, default='customer')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class DeliveryAddress(models.Model):
    CATEGORY_CHOICES = [
        ('primary', 'Primary'),
        ('additional', 'Additional'),
        ('this_order_only', 'This Order Only')  # changed to snake_case
    ]

    address_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, db_index=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='additional')
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255, blank=True)
    address_line_3 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=20)
    phone_no = models.CharField(max_length=20)

    class Meta:
        indexes = [
            models.Index(fields=['user']),
        ]

    def __str__(self):
        return f"{self.address_line_1}, {self.city}, {self.state}, {self.country} - {self.postal_code}"

    
class ProductCategory(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=50, unique=True)
    category_description = models.TextField(blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return self.category_name
    

class Product(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    UOM = [
        ('kg', 'KG'), ('g', 'G'), ('oz', 'OZ')
    ]

    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    availability = models.IntegerField()
    sale_qty = models.IntegerField(default=0)
    stock_qty = models.IntegerField(editable=False)  # Make it non-editable
    packet_size = models.FloatField(blank=True, null=True)
    packet_size_uom = models.CharField(max_length=10, blank=True, choices=UOM, default='kg')
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    product_category = models.ForeignKey('ProductCategory', on_delete=models.CASCADE)
    min_rating = models.FloatField(blank=True, null=True)
    max_rating = models.FloatField(blank=True, null=True)
    avg_rating = models.FloatField(blank=True, null=True)
    qa_count = models.IntegerField(blank=True, null=True)
    best_by = models.DateField(blank=True)
    package_dimension = models.TextField(blank=True)
    package_dimension_unit = models.CharField(max_length=10, blank=True)
    ingredients = models.TextField(blank=True)
    main_image = models.ImageField(upload_to='product_images/', blank=True)
    additional_images = models.JSONField(default=list, blank=True, null=True)  # assuming you store image URLs or paths in a list
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def save(self, *args, **kwargs):
        # Calculate stock_qty as the difference between availability and sale_qty
        self.stock_qty = self.availability - self.sale_qty
        super().save(*args, **kwargs)

    def __str__(self):
        return self.product_name

    
class ShoppingCart(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    cart_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, db_index=True)  # Add db_index=True for indexing
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f"Cart {self.cart_id} for {self.user.email}"
        

class CartItem(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    cart_item_id = models.AutoField(primary_key=True)
    cart = models.ForeignKey(ShoppingCart, on_delete=models.CASCADE, db_index=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    class Meta:
        indexes = [
            models.Index(fields=['cart']),
            models.Index(fields=['product']),
        ]

    def __str__(self):
        return f"CartItem {self.cart_item_id} for Cart {self.cart.cart_id} - Product {self.product.product_id}"

class OrderMaster(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    SHIPPING_METHOD_CHOICES = [
        ('free', 'Free'),
        ('expedited', 'Expedited'),
        ('xpresspost', 'Xpresspost'),
    ]

    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, db_index=True)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='pending',blank=True)
    payment_by = models.TextField(blank=True)  # You can adjust the max_length as needed
    rating_receo = models.CharField(max_length=255, null=True, blank=True)  # You can adjust the max_length as needed
    address = models.ForeignKey(DeliveryAddress, on_delete=models.CASCADE, db_index=True, blank=True, null=True)
    shipping_method = models.CharField(max_length=25, choices=SHIPPING_METHOD_CHOICES,blank=True, default='free')

    def __str__(self):
        return f"Order {self.order_id} for {self.user.email} - Total Amount: {self.total_amount}"

class OrderItem(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    order_item_id = models.AutoField(primary_key=True)
    order = models.ForeignKey(OrderMaster, on_delete=models.CASCADE, db_index=True)
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, db_index=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_index=True)
    quantity = models.IntegerField()
    sub_total = models.DecimalField(max_digits=10, decimal_places=2, editable=False)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def save(self, *args, **kwargs):
        # Calculate subtotal based on quantity and product price
        self.sub_total = self.quantity * self.product.product_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"OrderItem {self.order_item_id} - Order {self.order.order_id} - Product {self.product.product_id}"

class OrderDelivery(models.Model):
    STAGE_CHOICES = [
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('out_for_delivery', 'Out for Delivery'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    delivery_id = models.AutoField(primary_key=True)
    order = models.ForeignKey(OrderMaster, on_delete=models.CASCADE, db_index=True)
    user = models.ForeignKey(UserDetails, on_delete=models.CASCADE, db_index=True)
    address = models.ForeignKey(DeliveryAddress, on_delete=models.CASCADE, db_index=True)
    current_stage = models.CharField(max_length=20, choices=STAGE_CHOICES, default='processing')
    expected_date = models.DateField()

    def __str__(self):
        return f"Delivery {self.delivery_id} - Order {self.order.order_id} - User {self.user.email}"