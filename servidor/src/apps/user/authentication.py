from django.conf import settings
from rest_framework import authentication, exceptions
import jwt

from .models import User

 
class CustomUserAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')

        if not auth_header:
            return None
        
        # Verifica que el encabezado comience con 'Bearer'
        if not auth_header.startswith('Bearer '):
            return None
        
        # Divide el encabezado para obtener el token
        token = auth_header.split(' ')[1]

        try:
            payload = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Token has expired")
        except jwt.DecodeError:
            raise exceptions.AuthenticationFailed("Token is invalid")
    
        user = User.objects.filter(id=payload["id"]).first()

        return (user, None)
