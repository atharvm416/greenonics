# Generated by Django 5.0.2 on 2024-03-05 17:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('greenonicsapp', '0012_alter_product_additional_images'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='deliveryaddress',
            name='greenonicsa_user_id_6d2c27_idx',
        ),
        migrations.AlterField(
            model_name='deliveryaddress',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='greenonicsapp.userdetails'),
        ),
    ]
