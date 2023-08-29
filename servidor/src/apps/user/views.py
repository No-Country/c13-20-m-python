from rest_framework import views,response,exceptions,permissions
from .serializer import UserSerializer, UserRegistrationSerializer, UserLoginSerializer
from .services import create_user, user_email_selector, create_token
from django.shortcuts import get_object_or_404
from .models import User
from . import authentication

class RegisterApi(views.APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data

        serializer.instance = create_user(user_dc=data)

        return response.Response(data={"message": "user registered", "data": serializer.data})
    
class LoginApi(views.APIView):
    
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = user_email_selector(email)

        if user is None:
            raise exceptions.AuthenticationFailed("Invalid Credentials")
        
        if not user.check_password(raw_password=password):
            raise exceptions.AuthenticationFailed("Invalid Credentials")

        token = create_token(user_id=user.id)

        resp = response.Response()

        resp.data = {"message": "successful login"}

        resp.set_cookie(key="jwt", value=token, httponly=True)

        return resp

class UserApi(views.APIView):
    "Este endpoint solo se puede usar si el usuario esta autenticado"
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)

        return response.Response(serializer.data)


class LogoutApi(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):

        resp = response.Response()
        resp.delete_cookie("jwt")
        resp.data = {"message": "successful logout"}

        return resp
