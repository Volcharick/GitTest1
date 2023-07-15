from django.db import models
from django.urls import reverse
from django.utils.text import slugify
# Create your models here.

class Prodavec(models.Model):
    name = models.CharField(max_length=100, blank=False)

    
class Sohranenia(models.Model):
    name = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return f'{self.name}'
    
class Category(models.Model):
    

    name = models.CharField(max_length=100, blank=False)
    category_id = models.DecimalField(max_digits=5, decimal_places=0)
    category_chosen = models.BooleanField(default = False)
    def __str__(self):
        return f'{self.name}'


class Ingredients(models.Model):
    TV = "TVR"
    SH = "SHD"
    NON = "NKZ"
    CONDITION=[
        (TV,"Твердое"),
        (SH, "Жидкое"),
        (NON, "Не указано")
    ]
    name = models.CharField(max_length=100,blank=False)
    parent_id = models.DecimalField(max_digits=5, decimal_places=0)
    chosen = models.BooleanField(default = False)
    condition = models.CharField(max_length=3, choices=CONDITION, default= NON)
    # dop_pole = models.ForeignKey(Category, on_delete=models.PROTECT, null = True, blank=True, related_name= 'ingredien')
    # prod = models.ManyToManyField(Prodavec)
    
    # def save(self,*args, **kwargs):
    #     self.slug = slugify(self.name)
    #     super(Ingredients,self).save(*args,**kwargs)

    def __str__(self):
        return f'{self.name}'


