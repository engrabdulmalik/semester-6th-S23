from django.urls import path
from backendAPI import views

urlpatterns = [
    path('drinks/', views.GetDrinks, name='drinks'),
    path('menu-items',views.MenuItemList.as_view(),name='menu-items' ),
    path('menu-items/<int:pk>/',views.MenuItemDetail.as_view(),name='menu-item-detail' ),
]