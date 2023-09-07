from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Ticket, Event

# Create your views here.

class TicketView(APIView):
    def post(self, request, event_id):
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar la capacidad antes de vender un ticket
        if event.tickets_sold < event.capacity:
            # Crear un ticket asociado al usuario autenticado
            ticket = Ticket(event=event, user=request.user)
            ticket.save()

            # Incrementar el contador de tickets vendidos para el evento
            event.tickets_sold += 1
            event.save()

            return Response({"message": "Ticket comprado exitosamente"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "El evento está agotado"}, status=status.HTTP_400_BAD_REQUEST)
