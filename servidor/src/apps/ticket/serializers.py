from rest_framework import serializers
from .models import User, Event,Order


# Categoria Seriliazer
class EventOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','name','date', 'finish_date','ticketPrice','event_images', 'location']


class UserOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['id', 'username']


class OrderSerializer(serializers.ModelSerializer):

    event = EventOrderSerializer(read_only=True)
    user = UserOrderSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = "__all__"
        read_only_fields = ('id', 'created_at', 'user')
    
    def create(self, validated_data):

        validated_data['user'] = self.context['request'].user
        validated_data['event'] = self.context['event']
        order = Order.objects.create(**validated_data)
        order.save()
        return order
    

""" class TicketSerializer(serializers.ModelSerializer):

    event = EventTicketSerializer(read_only=True)

    class Meta:
        model = Ticket
        fields = ["id", "created_at","event"]
        read_only_fields = ('id',) """