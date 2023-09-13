from rest_framework import routers
from .views import ListMyOrders
from django.urls import path

urlpatterns = [
    path('my-tickets/', ListMyOrders.as_view(), name='tickets' ),
]

