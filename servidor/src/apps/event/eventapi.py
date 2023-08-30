from .models import Event,User
from rest_framework import viewsets, permissions,response, exceptions
from .serializer import EventSerializers
from apps.user import authentication

class EventViewSet(viewsets.ModelViewSet):
    
    queryset = Event.objects.all()
    serializer_class = EventSerializers

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )