from rest_framework import views,response,exceptions,permissions
from .serializer import UserSerializer
from .services import create_user

class RegisterApi(views.APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data

        serializer.instance = create_user(user_dc=data)

        return response.Response(data=serializer.data)