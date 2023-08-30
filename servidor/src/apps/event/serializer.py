from rest_framework import serializers
from .models import Event,User

class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','eventHost','name','description','capacity','date','created_at','virtual','state','ticketPrice','location')
        read_only_fields = ('created_at','eventHost',) 

    def create(self, validated_data):
        validated_data['eventHost'] = self.context['request'].user
        event = Event.objects.create(**validated_data)
        return event

class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = ['created_at']
        read_only_fields = ('id','eventHost')