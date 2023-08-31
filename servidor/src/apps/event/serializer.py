from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','eventHost','name','description','capacity','date','created_at','virtual','state','ticketPrice','event_images','categories','location')
        read_only_fields = ('created_at','eventHost',) 

    def create(self, validated_data):        
        validated_data['eventHost'] = self.context['request'].user
        # Toma categorias a partir de IDs que vienen del request
        category = validated_data.pop('categories', [])        
        event = Event.objects.create(**validated_data)
        event.categories.set(category)
        event.save()
        return event        

class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = ['created_at']
        read_only_fields = ('id','eventHost')

