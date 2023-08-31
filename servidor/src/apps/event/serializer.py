from rest_framework import serializers
from .models import Event,User, Category

class EventSerializers(serializers.ModelSerializer):
    

    class Meta:
        model = Event
        fields = ('id','eventHost','name','description','capacity','date','created_at','virtual','state','ticketPrice','event_images','categories','location')
        read_only_fields = ('created_at','eventHost',) 

    def create(self, validated_data):        
        validated_data['eventHost'] = self.context['request'].user

        # Obtén las categorías a partir de los IDs proporcionados en el request
        category = validated_data.pop('categories', [])
        
        event = Event.objects.create(**validated_data)

        # Asigna las categorías utilizando el método 'set()'
        event.categories.set(category)
        return event     


class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = ['created_at']
        read_only_fields = ('id','eventHost')

