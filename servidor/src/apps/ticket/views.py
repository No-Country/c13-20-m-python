from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import OrderSerializer
from apps.user import authentication

from .models import Event, Order

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
        cant_tickets = int(request.data["number_tickets"])
        if event.tickets_sold + cant_tickets > event.capacity:
            return Response({"error": "The event does not have capacity for that number of tickets"}, status=status.HTTP_400_BAD_REQUEST)
        
        

        order_serializer = OrderSerializer(data=request.data, context={'request': request, 'event':event})

        if order_serializer.is_valid():            
            order = order_serializer.save()

            event.tickets_sold += cant_tickets
            event.save()

            return Response({
                'message': 'Order was created successfully!',
                'order': OrderSerializer(order).data
            }, status=status.HTTP_201_CREATED)
        
        else:
            return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

class ListMyOrders(APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, ) 

    def get(self, request):
        orders = Order.objects.filter(user__username=request.user.username)
        order_serializer = OrderSerializer(orders, many=True)
        return Response(order_serializer.data)

    
