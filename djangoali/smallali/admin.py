from typing import Any, List, Optional, Tuple
from django.contrib import admin
from django.db.models.query import QuerySet
from .models import Category, Ingredients, Prodavec, Sohranenia


admin.site.register(Prodavec)
admin.site.register(Sohranenia)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "category_id", "category_chosen","dop_pol"]
    list_editable = ["category_id", "category_chosen"]
    list_per_page = 7
    # ordering=["category_id"]
    @admin.display(ordering="category_id",description="Статус")
    def dop_pol(self, zap: Category):
        if zap.category_chosen == False:
            return "Не выбран"
        return "Выбран"
    

class RatingFilter(admin.SimpleListFilter):
    title = "Фильтр по группам ID"
    parameter_name = "idgroup"

    def lookups(self, request, model_admin):
        return [
            ('first-second-third',"Группа 1: fst"),
            ('fourth-fifth-sixth',"Группа 2: ffs"),
            ('seventh-eighth-ninth',"Группа 3: sen"),
            ("tenth","Группа 4: t")
        ]
    def queryset(self, request, queryset):
        if self.value() == "first-second-third":
            return queryset.filter(parent_id__in=[1,2,3])
        elif self.value() == "fourth-fifth-sixth":
            return queryset.filter(parent_id__in=[4,5,6])
        elif self.value() == "seventh-eighth-ninth":
            return queryset.filter(parent_id__in=[7,8,9])
        elif self.value() == "tenth":
            return queryset.filter(parent_id__in=[10])



        return queryset

@admin.register(Ingredients)
class IngredientsAdmin(admin.ModelAdmin):
    list_display = ["name", "parent_id", "chosen","condition"] #"dop_pole"
    list_editable = ["parent_id", "chosen","condition"] #"dop_pole"
    list_per_page = 10
    actions = ["set_tv"]
    search_fields = ["name", "condition"]
    list_filter = ['condition',"parent_id",RatingFilter]
    # filter_horizontal = ["prod"] 
    # fields = ["name","chosen"]
    # readonly_fields = ["chosen","condition"]

    @admin.action(description="Установить состояние в твердое")
    def set_tv(self,request, queryset):
        entry_count = queryset.update(condition = Ingredients.TV)
        self.message_user(request, f'Было обновлено {entry_count} записяу')



# admin.site.register(Category,CategoryAdmin)
# admin.site.register(Ingredients,IngredientsAdmin)
# Register your models here.
