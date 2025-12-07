from django.shortcuts import render
from django.http import HttpResponse
from .models import Drinks
def GetDrinks(request):
    if request.method == 'GET':
        drinks = Drinks.objects.all()
        return HttpResponse(drinks)
    