from rest_framework import routers
from .views import EventViewSet, EventDetailView
from django.urls import path, include

router = routers.DefaultRouter()

router.register('events', EventViewSet, 'events')

urlpatterns = [
    path('', include(router.urls)),
    path('events/<int:pk>/', EventDetailView.as_view(), name="event_detail")
]
