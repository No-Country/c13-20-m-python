from .views import EventView, EventDetailView, EventCategoryView
from django.urls import path

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
    path('events/<int:pk>/', EventDetailView.as_view(), name="event_detail"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category')
]
