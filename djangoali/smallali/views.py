from django.shortcuts import render
from smallali.models import Category
from smallali.models import Ingredients
from smallali.models import Sohranenia
from django.http import HttpResponse,HttpResponseNotFound,HttpResponseRedirect
from django.urls import reverse,converters
from django.template.loader import render_to_string
from django.db.models import Q,F,Sum,Min,Max,Count
# Create your views here.

def index_page(request):
    all_ingredients = Ingredients.objects.all()
    all_category = Category.objects.all()
    # if request.method == "POST":
    #     name = request.POST['nameInput']
    #     if len(name) == 0 or len(name) >25:
    #         return render(request,'smallali/index.html', context={'category':all_category, 'ingredients':all_ingredients, "not_or_many_error" : True})
    #     return HttpResponseRedirect("/done")
    return render(request,'smallali/index.html', context={'category':all_category, 'ingredients':all_ingredients, "not_or_many_error" : False})


def done(request):
    return render(request,'smallali/done.html')

def about_page(request, category:str, ingredient: str):
    all_ingredients = Ingredients.objects.all()
    all_category = Category.objects.all()
    return render(request, 'smallali/about.html', context={'category': all_category, 'ingredients': all_ingredients, 'our_category': category, "our_ingredient": ingredient})

def under_about(request, category:str):
    all_ingredients = Ingredients.objects.all()
    all_category = Category.objects.order_by("-name")
    agg = all_category.aggregate(Max('name'))
    for ingredient_slug in all_ingredients:
        ingredient_slug.save()
    categ_foreign = Category.objects.all()[0]



    filt = all_category.filter(Q(name__in=["Выпечка","Крупы","Молочные продукты","Овощи"]) | Q(category_id = 7), category_chosen=False)
    annot = Category.objects.annotate(
        category_name = F("name") + "- годная штука"
    )
    return render(request, 'smallali/under_about.html', 
                  context={'categorys':filt,
                           'ingredients':all_ingredients, 
                           'our_category':category,
                           "slug":[i.slug for i in all_ingredients],
                           'agg':agg,
                           "category_name": annot,
                           "categ_foreign":categ_foreign,})


description = {
    "leo": "Значит ты львенок",
    "scorp": "Значит ты токсик",
    "strel": "Недокупидон",
    "vod": "Недоцарь морей"
}

def lao(request):
    a = []
    if request.method == "POST":
        if "ingredients[]" in request.POST:
            for i in request.POST.getlist("ingredients[]"):
                a.append(i)
        else:
            pass
        if "category[]" in request.POST:
            for i in request.POST.getlist("category[]"):
                a.append(i)

        for i in range(len(a)):
            Sohranenia(name=a[i]).save()
        
        return render(request, 'smallali/about.html', context={"spisok":a, "dict": request.POST.getlist("ingredients[]")})
    return HttpResponseRedirect("/done")


def forallznakov(request, znak):
    return render(request, 'smallali/about.html')

def forallznakov_number(request, znak):
    index = list(description)
    if len(index) < znak:
        return HttpResponseNotFound("Сорри, брат, но ты сморозил ересь")
    new_url = reverse("name-number", args = [index[znak]]) 
    # return HttpResponseRedirect(f'/horoscope/{index[znak]}')
