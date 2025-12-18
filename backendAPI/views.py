from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from rest_framework import generics
from .serializers import *
def GetDrinks(request):
    if request.method == 'GET':
        drinks = Drinks.objects.all()
        return HttpResponse(drinks)
class MenuItemList(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()  
    serializer_class = MenuItemSerializer
class MenuItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()  
    serializer_class = MenuItemSerializer