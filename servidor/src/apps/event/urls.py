from rest_framework import routers
<<<<<<< HEAD
from .views import EventViewSet, EventDetailView
from django.urls import path, include
=======
from .views import EventView, EventDetailView, EventCategoryView
from django.urls import path
>>>>>>> cd8e9ba34c7c9a52e7a64752c9acb54348b3e30d

router = routers.DefaultRouter()

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
    path('events/<pk>/', EventDetailView.as_view(), name="event_detail"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category')
]
