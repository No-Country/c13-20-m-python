from .models import Event,User
from rest_framework import viewsets, permissions,response,exceptions, views, status
from .serializer import EventSerializers, EventDetailSerializer
from apps.user import authentication

class EventViewSet(viewsets.ModelViewSet):
    
    queryset = Event.objects.all()
    serializer_class = EventSerializers

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )


#viewset tiene preferencia antes que apiview en las rutas
#esta clase esta de más
class EventDetailView(views.APIView):
    def get(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not fouasdfsadfnd"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event)
        print('asdfsadf')
        return response.Response(serializer.data)

