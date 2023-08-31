from .models import Event,User
from rest_framework import viewsets, permissions,response,exceptions, views, status
from .serializer import EventSerializers, EventDetailSerializer
from apps.user import authentication
from rest_framework.filters import SearchFilter, OrderingFilter

class EventViewSet(viewsets.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    def post(self,request):
        queryset = Event.objects.all()
        serializer_class = EventSerializers
   
        filter_backends = (SearchFilter, OrderingFilter)
        search_fields = ('location','date','eventHost__username')
        return response.Response(serializer_class.data)


class EventDetailView(views.APIView):    
    def get(self, request, pk):        
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event)
        return response.Response(serializer.data)


# Objetivos:

# 1- Desmantelar el EventViewSet y ahcerlo parecer como el eventdetailview o los views.py que se encuentran en el user
# 2- Modificar el urls.py para que acceda a eventapi con cada clase por separado
# 3- verificar que funcione el serializer de igual manera
# 4- seguir con las routes del api para que funcione como ?location=tandil o ?eventHost=lucas1