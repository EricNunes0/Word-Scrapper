from django.contrib import admin
from django.urls import path
from app_hadoop import views

urlpatterns = [
    path('wordscrapper/', views.wordScrapper, name = "wordscrapper"),
    
    path('wordscrapper/result', views.wordScrapperResult, name = "scrap")
    
    #path('hadoop/', admin.site.urls)
]
