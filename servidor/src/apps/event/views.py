from .models import Event
from rest_framework import permissions,response, views, status, filters, generics
from .serializer import EventSerializer, EventDetailSerializer
from apps.user import authentication
from django_filters.rest_framework import DjangoFilterBackend


class EventView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_fields  = ('location','date','eventHost__username')

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
    
    def get(self, request):
        event = Event.objects.all()
        
        location = request.query_params.get('location')
        if location:
            event = event.filter(location__icontains=location)
        
        date = request.query_params.get('date')
        if date:
            event = event.filter(date=date)
        
        eventHost_username = request.query_params.get('eventHost__username')
        if eventHost_username:
            event = event.filter(eventHost__username=eventHost_username)
        
        serializer = EventSerializer(event, many=True)
        return response.Response(serializer.data)    

class EventDetailView(views.APIView):    
    def get(self, request, pk):        
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event)
        return response.Response(serializer.data)   
