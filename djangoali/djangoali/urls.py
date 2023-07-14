"""
URL configuration for djangoali project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from smallali.views import index_page, about_page, under_about, done
from smallali import views
import mimetypes


admin.site.site_header = "Моя админка"
admin.site.index_title = 'Моя супер-пупер админка'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index_page),
    path('done', done),
    path('movies/<str:category>/<str:ingredient>', about_page, name = "about-name"),
    path('movies/<str:category>/', under_about, name = 'under-about-name'),
    path("horoscope/<int:znak>/", views.forallznakov_number),
    path("horoscope/<str:znak>/", views.forallznakov, name = "name-number"),
    path('horoscope/meri/lao', views.lao),
    path('__debug__/', include('debug_toolbar.urls')),
]
