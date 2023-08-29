from rest_framework import views,response,permissions, status
from .serializer import UserRegistrationSerializer, UserLoginSerializer, UserSerializer
from .services import create_token
from .models import User
from . import authentication
from drf_yasg.utils import swagger_auto_schema

@swagger_auto_schema(request_body=UserRegistrationSerializer)
class RegisterView(views.APIView):

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return response.Response({
                'message': 'Registration successful',
                'user': UserRegistrationSerializer(user).data  # Devuelve los datos del usuario recién creado
            }, status=status.HTTP_201_CREATED)

        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        
        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            return response.Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)

        if not user.check_password(raw_password=password):
            return response.Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)

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


class LogoutView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):

        resp = response.Response()
        resp.delete_cookie("jwt")
        resp.data = {"message": "successful logout"}

        return resp
