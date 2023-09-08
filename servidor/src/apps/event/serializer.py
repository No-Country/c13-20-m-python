from rest_framework import serializers
from .category import Category
from .models import Event
from apps.user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['id', 'username']

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

    # Mostrar gratis en vez de 0.0
    def to_representation(self, instance):
        data = super().to_representation(instance)

        if data['ticketPrice'] == 0.0:
            data['ticketPrice'] = 'Gratis'
            
        return data
    

    
class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = ('id','eventHost','name','description','capacity','date','created_at','virtual','state','ticketPrice','event_images','categories','location')
        read_only_fields = ('created_at', 'eventHost',) 
        
    #Validacion capacity != 0 si es 0 no puede comprar entradas?
    def validate_capacity(self, value):
        if value != 0 and value < 10000:
            return value
        else:
            raise serializers.ValidationError("Capacidad debe ser distinto de 0 y menor a 10.000") 
        
    #Validacion ticket mayor o igual 0
    def validate_ticketPrice(self, value):
        if value >= 0:
            return value 
        else:
            raise serializers.ValidationError("Ticket no menor a 0")
        
    #validar categorias no puede estar vacio, si es vacio poner default = Otros
        

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

