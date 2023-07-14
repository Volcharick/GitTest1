# Generated by Django 4.2 on 2023-05-13 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smallali', '0013_alter_ingredients_dop_pole'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prodavec',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='ingredients',
            name='prod',
            field=models.ManyToManyField(to='smallali.prodavec'),
        ),
    ]