from rest_framework import serializers
from .models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True}
        }

    def validate_email(self, value):
        if User.objects.filter(email = value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
    
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['firse_name'],
            last_name = validated_data['last_name']
        )
    
        user.set_password(validated_data['password'])
        user.save()
        return user
    


    class UserLoginSerializer(serializers.Serializer):
        email = serializers.EmailField()
        password = serializers.CharField(write_only = True)


    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            exclude = ['password']