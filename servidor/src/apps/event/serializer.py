from rest_framework import serializers
from .models import Event

class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','name','description','capacity','date','created_at','virtual','state','ticketPrice','location')
        read_only_fields = ('created_at', )
