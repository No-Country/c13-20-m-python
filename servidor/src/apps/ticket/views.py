from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TicketSerializer
from apps.user import authentication

from .models import Event, Ticket

# Create your views here.

class BuyTicketView(APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 
    
    def post(self, request, event_id):
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar la capacidad antes de vender un ticket
        if event.tickets_sold < event.capacity:

            ticket_data = {"event": event.id, "user": request.user.id}
            serializer = TicketSerializer(data=ticket_data)
            
            if serializer.is_valid():
                serializer.save()
      
                # Incrementar el contador de tickets vendidos para el evento
                event.tickets_sold += 1
                event.save()

                return Response({"message": "Ticket purchased successfully"}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
        else:
            return Response({"error": "El evento está agotado"}, status=status.HTTP_400_BAD_REQUEST)
    

class ListMyTickets(APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    def get(self, request):
        tickets = Ticket.objects.filter(user__username=request.user.username)
        ticket_serializer = TicketSerializer(tickets, many=True)
        return Response(ticket_serializer.data)

    
