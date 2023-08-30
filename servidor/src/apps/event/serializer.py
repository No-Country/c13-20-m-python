from rest_framework import serializers
from .models import Event,User

class EventSerializers(serializers.ModelSerializer):
    
    # mostrar nombre
    categories = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Event
        fields = ('id','eventHost', 'categories', 'name','description','capacity','date','created_at','virtual','state','ticketPrice','location')
        read_only_fields = ('created_at','eventHost',) 

    def create(self, validated_data):
        validated_data['eventHost'] = self.context['request'].user
        event = Event.objects.create(**validated_data)
        return event
