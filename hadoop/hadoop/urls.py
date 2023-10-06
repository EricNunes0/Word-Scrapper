from django.contrib import admin
from django.urls import path
from app_hadoop import views
from app_hadoop.views import wordsheetReader

urlpatterns = [
    path('', views.index, name = "index"),
    
    path('worksheet-reader/', wordsheetReader.as_view(), name = "worksheet")
]
