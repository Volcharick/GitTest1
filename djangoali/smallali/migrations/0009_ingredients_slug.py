# Generated by Django 4.2 on 2023-05-08 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smallali', '0008_category_category_chosen'),
    ]

    operations = [
        migrations.AddField(
            model_name='ingredients',
            name='slug',
            field=models.SlugField(default=''),
        ),
    ]
