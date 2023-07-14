# Generated by Django 4.2 on 2023-05-22 18:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('smallali', '0016_alter_ingredients_dop_pole'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sohranenia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='ingredients',
            name='dop_pole',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='ingredien', to='smallali.category'),
        ),
    ]
