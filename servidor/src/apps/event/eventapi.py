from .models import Event,User
from rest_framework import viewsets, permissions,response,exceptions, views, status
from .serializer import EventSerializers, EventDetailSerializer
from apps.user import authentication

class EventViewSet(viewsets.ModelViewSet):
    
    queryset = Event.objects.all()
    serializer_class = EventSerializers

    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

class EventDetailView(views.APIView):
    def get(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event)
        return response.Response(serializer.data)

    def put(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({"detail": "Event updated successfully"})
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EventDetailSerializer(event, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response({"detail": "Event updated successfully"})
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return response.Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

        event.delete()
        return response.Response({"detail": "Event deleted successfully"})