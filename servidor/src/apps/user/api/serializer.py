from rest_framework import serializers
from .services import UserDataClass

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def to_internal_value(self, data):
        data = super().to_internal_value(data)
    
        return UserDataClass(**data)