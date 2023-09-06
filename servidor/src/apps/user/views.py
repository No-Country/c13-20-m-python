from rest_framework import views,response,permissions, status
from .serializer import UserRegistrationSerializer, UserLoginSerializer, UserSerializer, UserDetailSerializer
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
            token = create_token(user_id=user.id)
            return response.Response({
                'message': 'Registration successful',
                'user': UserRegistrationSerializer(user).data,  # Devuelve los datos del usuario recién creado
                'token': token
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

        resp.data = {"message": "successful login", "token": token}

        return resp

class UserApi(views.APIView):
    "Este endpoint solo se puede usar si el usuario esta autenticado"
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)

        return response.Response({"data": serializer.data})


class LogoutView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request):

        resp = response.Response()
        resp.delete_cookie("jwt")
        resp.data = {"message": "successful logout"}

        return resp


class UserDetailView(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return response.Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta obtener es el mismo que el usuario autenticado
        if user != request.user:
            return response.Response({"detail": "You don't have permission to access this user"}, status=status.HTTP_403_FORBIDDEN)

        serializer = UserDetailSerializer(user)
        return response.Response(serializer.data)

    def put(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return response.Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta actualizar es el mismo que el usuario autenticado
        if user != request.user:
            return response.Response({"detail": "You don't have permission to update this user"}, status=status.HTTP_403_FORBIDDEN)

        serializer = UserDetailSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({"detail": "User updated successfully"})
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return response.Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta actualizar es el mismo que el usuario autenticado
        if user != request.user:
            return response.Response({"detail": "You don't have permission to update this user"}, status=status.HTTP_403_FORBIDDEN)

        serializer = UserDetailSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response({"detail": "User updated successfully"})
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return response.Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Verifica si el usuario que intenta eliminar es el mismo que el usuario autenticado
        if user != request.user:
            return response.Response({"detail": "You don't have permission to delete this user"}, status=status.HTTP_403_FORBIDDEN)

        user.delete()
        return response.Response({"detail": "User deleted successfully"})
