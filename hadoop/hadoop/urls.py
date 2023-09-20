from django.contrib import admin
from django.urls import path
from app_hadoop import views

urlpatterns = [
    path('', views.index, name = "index"),
    
    #path('result', views.index, name = "scrap")
    
    #path('hadoop/', admin.site.urls)
]
