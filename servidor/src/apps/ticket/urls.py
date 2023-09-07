from rest_framework import routers
from .views import TicketView
from django.urls import path

urlpatterns = [
    path('events/<int:pk>/tickets', TicketView.as_view(), name='events' ),
]