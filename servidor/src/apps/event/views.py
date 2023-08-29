from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Event
from .serializer import EventSerializers
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.

class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializers
    # FRONTEND
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request, *args, **kwargs):
        event_image = request.data('event_image')

        Event.objects.create(event_image = event_image)
