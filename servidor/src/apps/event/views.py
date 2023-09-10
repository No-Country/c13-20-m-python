from .models import Event, Category
from rest_framework import permissions, views, status, filters
from rest_framework.response import Response
from .serializer import EventSerializer, EventDetailSerializer, EventListSerializer, CategorySerializer, EventDetailOrganizerSerializer, EventListOrganizerSerializer
from apps.user import authentication
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404


class EventView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, ) 
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_fields  = ('location','date','eventHost__username')

    # LISTAR EVENTOS DEL HOME (Lo puede hacer sin estar autenticado)
    def get(self, request):
        event = Event.objects.filter(state=True)
        
        location = request.query_params.get('location')
        if location:
            event = event.filter(location__icontains=location)
        
        date = request.query_params.get('date')
        if date:
            event = event.filter(date=date)
        
        eventHost_username = request.query_params.get('eventHost__username')
        if eventHost_username:
            event = event.filter(eventHost__username=eventHost_username)
        
        event_serializer = EventListSerializer(event, many=True)
        return Response(event_serializer.data)   

    # CREAR UN EVENTO
    def post(self,request):
        
        serializer = EventSerializer(data=request.data, context={'request': request})
        
        if serializer.is_valid():            
            event = serializer.save()
            return Response({
                'message': 'Event was created successfully!',
                'event': EventSerializer(event).data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EventDetailAssistantView(views.APIView):   
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    #  VER DETALLE DE UN EVENTO (Cuando el usuario entra en un evento en especifico)
    def get(self, request, pk): 
        
        try:
            pk = int(pk)
            event = Event.objects.get(id=pk)

        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
            
        except ValueError:
            return Response({'error': 'ID user not valid'}, status=status.HTTP_400_BAD_REQUEST)

        event_serializer = EventDetailSerializer(event)
        return Response(event_serializer.data)   
        

    
    
# APIVIEW POR CATEGORIAS FILTRO
class EventCategoryView(views.APIView):

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 
    
    # METODO GET / Obtenemos la categoria y filtramos
    def get(self, request, category_name):
        
        
        #Cambiar a lower para mas disponibilidad en la ruta y que no salte errores
        category_name_lower = category_name.lower()
        
        #try:
           # pk = int(pk)
           #este get object devuelve por si solo un response not found
        category = get_object_or_404(Category, name=category_name)

        
        events = Event.objects.filter(categories__name=category)
        events_serializer = EventListSerializer(events, many=True)
           
        return Response(events_serializer.data)
             
class CategoryView(views.APIView):
    
    def get(self, request):
        cateogories = Category.objects.all()
        categories_serializer = CategorySerializer(cateogories, many=True)
        
        return Response(categories_serializer.data)


# VIEWS ORGANIZADOR

class EventDetailOrganizerView(views.APIView):

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    def get(self, request, pk): 

        pk = int(pk)
        try:
            event = Event.objects.get(id=pk)
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
            
        # Verifica si el usuario que intenta obtener es el mismo que el usuario autenticado
        if event.eventHost != request.user:
            return Response({"detail": "You don't have permission to access this event"}, status=status.HTTP_403_FORBIDDEN)

        event_serializer = EventDetailOrganizerSerializer(event)
        return Response(event_serializer.data)   

    # METODO PUT / Actualizamos evento
    def put(self, request, pk):
        
        pk = int(pk)

        try:
            event = Event.objects.get(id=pk)
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta obtener es el mismo que el usuario autenticado
        if event.eventHost != request.user:
            return Response({"detail": "You don't have permission to edit this event"}, status=status.HTTP_403_FORBIDDEN)
        

        # Deserializamos y convertimos en objeto event 
        event_deserializer = EventDetailOrganizerSerializer(event, data = request.data)

        if event_deserializer.is_valid():
            event_deserializer.save()
            return Response({
            'message': 'Event updated successfully!',
            'event': EventDetailOrganizerSerializer(event).data
        }, status=status.HTTP_200_OK)   
                
    def patch(self, request, pk):

        pk = int(pk)

        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta obtener es el mismo que el usuario autenticado
        if event.eventHost != request.user:
            return Response({"detail": "You don't have permission to edit this event"}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = EventDetailOrganizerSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Event updated successfully"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # METODO DELETE / Eliminamos evento
    def delete(self, request, pk):
        pk = int(pk)
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verifica si el usuario que intenta obtener es el mismo que el usuario autenticado
        if event.eventHost != request.user:
            return Response({"detail": "You don't have permission to edit this event"}, status=status.HTTP_403_FORBIDDEN)
        
        event.delete()
        return Response({'message: Event successfully removed!'}, status= status.HTTP_200_OK)
    


class EventListOrganizerView(views.APIView):

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 
    
    def get(self, request):
        
        events = Event.objects.filter(eventHost__username=request.user.username)
        event_serializer = EventListOrganizerSerializer(events, many=True)
        return Response(event_serializer.data)   
        