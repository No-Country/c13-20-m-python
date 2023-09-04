from django.conf import settings
from rest_framework import authentication, exceptions
import jwt

from .models import User

class CustomUserAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            return None
        
        try:
            payload = jwt.decode(token, "jwtsecretprueba", algorithms=["HS256"])
        except:
            raise exceptions.AuthenticationFailed("Unauthorized")
    
        user = User.objects.filter(id=payload["id"]).first()

        return (user, None)