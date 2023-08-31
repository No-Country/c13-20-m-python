from .models import Event
from rest_framework import permissions,response, views, status
from .serializer import EventSerializer, EventDetailSerializer
from apps.user import authentication
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter, OrderingFilter

class EventView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    def post(self,request):
        serializer = EventSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():            
            event = serializer.save()
            return response.Response({
                'message': 'Se creo el evento correctamente',
                'user': EventSerializer(event).data
            }, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # filter_backends = (SearchFilter, OrderingFilter)
        # search_fields = ('location','date','eventHost__username')
    
    def get(self,request):
        event = Event.objects.all()
        serializer = EventSerializer(event, many= True)
        return response.Response(serializer.data)

class EventDetailView(views.APIView):    
    def get(self, request, pk):        
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event)
        return response.Response(serializer.data)