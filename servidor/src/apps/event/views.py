from .models import Event, Category
from rest_framework import permissions, views, status, filters, generics
from rest_framework.response import Response
from .serializer import EventSerializer, EventDetailSerializer
from apps.user import authentication
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404


class EventView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_fields  = ('location','date','eventHost__username')

    # METODO GET / listamos eventos
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
        
        event_serializer = EventSerializer(event, many=True)
        return Response(event_serializer.data)   

    # METODO POST / Creamos evento
    def post(self,request):
        serializer = EventSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():            
            event = serializer.save()
            return Response({
                'message': 'Se creo el evento correctamente!',
                'user': EventSerializer(event).data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EventDetailView(views.APIView):   
     
    #  METODO GET / Encontramos evento por id
    def get(self, request, pk): 
        
        try:
            pk = int(pk)
            event = Event.objects.get(id=pk)

        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
            
        except ValueError:
            return Response({'error': 'ID de usuario no válido'}, status=status.HTTP_400_BAD_REQUEST)

        event_serializer = EventDetailSerializer(event)
        return Response(event_serializer.data)   
        
    # METODO PUT / Actualizamos evento
    def put(self, request, pk):
        
        pk = int(pk)
        event = Event.objects.get(id = pk) 

        # Deserializamos y convertimos en objeto event 
        event_deserializer = EventDetailSerializer(event, data = request.data)
    
        if event_deserializer.is_valid():
            event_deserializer.save()
            return Response({
            'message': 'Event updated successfully!',
            'event': EventDetailSerializer(event).data
        }, status=status.HTTP_200_OK)   
                
    def patch(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Event updated successfully"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # METODO DELETE / Eliminamos evento
    def delete(self, request, pk):
        event = Event.objects.get(id = pk)
        event.delete()
        return Response({'message: Event successfully removed!'}, status= status.HTTP_200_OK)
    
    
# APIVIEW POR CATEGORIAS FILTRO
class EventCategoryView(views.APIView):
    
    # METODO GET / Obtenemos la categoria y filtramos
    def get(self, request, category_name):
        
        
        #Cambiar a lower para mas disponibilidad en la ruta y que no salte errores
        category_name_lower = category_name.lower()
        
        #try:
           # pk = int(pk)
           #este get object devuelve por si solo un response not found
        category = get_object_or_404(Category, name=category_name)

        
        events = Event.objects.filter(categories__name=category)
        events_serializer = EventSerializer(events, many=True)
           
        return Response(events_serializer.data)
     
            
