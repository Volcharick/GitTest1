# Generated by Django 4.2 on 2023-04-26 08:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smallali', '0004_rename_choosen_ingredients_chosen'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='short_name',
        ),
    ]
