# Generated by Django 4.2 on 2023-04-26 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smallali', '0007_category_ingredients_delete_categorys_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='category_chosen',
            field=models.BooleanField(default=False),
        ),
    ]
