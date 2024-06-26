# Generated by Django 5.0.2 on 2024-02-27 11:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('greenonicsapp', '0004_alter_userdetails_address_alter_userdetails_country_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermaster',
            name='address',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='greenonicsapp.deliveryaddress'),
        ),
        migrations.AlterField(
            model_name='ordermaster',
            name='payment_by',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='ordermaster',
            name='payment_status',
            field=models.CharField(blank=True, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='pending', max_length=20),
        ),
        migrations.AlterField(
            model_name='product',
            name='avg_rating',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='best_by',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='expiry_date',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='images',
            field=models.JSONField(blank=True, default=list),
        ),
        migrations.AlterField(
            model_name='product',
            name='ingredients',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='max_rating',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='min_rating',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='package_dimension',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='package_dimension_unit',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='product',
            name='packet_size',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='qa_count',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='sale_qty',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='uom',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='productcategory',
            name='category_description',
            field=models.TextField(blank=True),
        ),
    ]
