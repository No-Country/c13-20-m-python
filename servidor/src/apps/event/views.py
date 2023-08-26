from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Event
from .serializer import EventSerializers

# Create your views here.

class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
