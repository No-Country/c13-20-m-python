from rest_framework import routers
<<<<<<< HEAD
from .eventapi import EventViewSet
from django.urls import path, include
=======
from .views import EventView, EventDetailView
from django.urls import path
>>>>>>> LucasSimoes

router = routers.DefaultRouter()

urlpatterns = [
<<<<<<< HEAD
    path('', include(router.urls)),
=======
    path('events/', EventView.as_view(), name='events' ),
    path('events/<int:pk>/', EventDetailView.as_view(), name="event_detail"),
>>>>>>> LucasSimoes
]
