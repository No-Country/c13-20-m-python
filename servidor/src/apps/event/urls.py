from rest_framework import routers
from .eventapi import EventViewSet
from django.urls import path, include

router = routers.DefaultRouter()

router.register('events', EventViewSet, 'events')

urlpatterns = [
    path('', include(router.urls)),
]
