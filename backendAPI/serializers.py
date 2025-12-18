from rest_framework import serializers
from .models import *

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        # fields = [ 'name', 'price', ]
        fields= '__all__'