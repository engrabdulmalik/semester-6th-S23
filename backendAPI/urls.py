from django.urls import path
from backendAPI import views

urlpatterns = [
    path('drinks/', views.GetDrinks, name='drinks'),
]