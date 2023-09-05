from rest_framework import serializers
from .models import Event, Category
from apps.user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['id', 'first_name']

# Categoria Seriliazer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class EventListSerializer(serializers.ModelSerializer):

    categories = CategorySerializer(many=True, read_only=True)
    eventHost = UserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'eventHost', 'name', 'description', 'capacity', 'date', 'created_at', 'virtual', 'state', 'ticketPrice', 'event_images', 'categories', 'location')
        read_only_fields = ('created_at', 'eventHost',)


class EventSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
     
=======
    
>>>>>>> leonel
    class Meta:
        model = Event
        fields = ('id','eventHost','name','description','capacity','date','created_at','virtual','state','ticketPrice','event_images','categories','location')
        read_only_fields = ('created_at', 'eventHost',) 

    def create(self, validated_data):

        validated_data['eventHost'] = self.context['request'].user
        
        # Toma las categorías a partir de los IDs que vienen del request
        categories = validated_data.pop('categories', [])  # Obtén la lista de IDs directamente

        event = Event.objects.create(**validated_data)
        event.categories.set(categories)
        event.save()
        return event


# Evento detalle sin categorias con id y nombre
class EventDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        exclude = ['created_at']
        read_only_fields = ('id','eventHost')

