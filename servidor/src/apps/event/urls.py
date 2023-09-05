<<<<<<< HEAD
from .views import EventView, EventDetailView, EventCategoryView
=======
from rest_framework import routers
from .views import EventView, EventDetailView, EventCategoryView, CategoryView
>>>>>>> leonel
from django.urls import path

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
<<<<<<< HEAD
    path('events/<int:pk>/', EventDetailView.as_view(), name="event_detail"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category')
=======
    path('events/<pk>/', EventDetailView.as_view(), name="event_detail"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category'),
    path('categories/', CategoryView.as_view(), name='categories'),
    
>>>>>>> leonel
]
