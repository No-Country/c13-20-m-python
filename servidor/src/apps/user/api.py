from .models import Event
from rest_framework import viewsets, permissions
from .serializer import EventSerializers

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializers