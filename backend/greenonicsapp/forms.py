# forms.py
from django import forms
from .models import Product

class ProductAdminForm(forms.ModelForm):
    additional_images = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}), required=False)

    class Meta:
        model = Product
        fields = '__all__'
