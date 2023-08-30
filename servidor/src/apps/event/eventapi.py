from .models import Event,User
from rest_framework import viewsets, permissions,response,exceptions
from .serializer import EventSerializers
from apps.user import authentication

class EventViewSet(viewsets.ModelViewSet):
    
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializers

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.AllowAny,)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)

