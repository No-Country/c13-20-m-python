from rest_framework import routers
from .views import EventView, EventDetailView
from django.urls import path

router = routers.DefaultRouter()

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
    path('events/<pk>/', EventDetailView.as_view(), name="event_detail"),
]
