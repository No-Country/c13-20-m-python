from rest_framework import routers
from .views import BuyTicketView, ListMyTickets
from django.urls import path

urlpatterns = [
    path('my-tickets', ListMyTickets.as_view())
]
