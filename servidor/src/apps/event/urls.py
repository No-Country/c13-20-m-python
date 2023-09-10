from rest_framework import routers
from .views import EventView, EventDetailAssistantView, EventCategoryView, CategoryView
from apps.ticket.views import BuyTicketView
from django.urls import path

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
    path('events/<pk>/', EventDetailAssistantView.as_view(), name="event_detail_assistant"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category'),
    path('categories/', CategoryView.as_view(), name='categories')
]

#TICKETS

urlpatterns += [
    path('events/<int:event_id>/buy-ticket', BuyTicketView.as_view(), name='tickets')
]
