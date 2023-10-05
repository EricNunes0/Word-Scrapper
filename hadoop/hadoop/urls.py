from django.contrib import admin
from django.urls import path
from app_hadoop import views
from app_hadoop.views import CsvReader

urlpatterns = [
    path('', views.index, name = "index"),
    
    path('csv-reader/', CsvReader.as_view(), name = "csv")
]
