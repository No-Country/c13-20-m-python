from rest_framework import views,response,exceptions,permissions
from .serializer import UserSerializer
from .services import create_user, user_email_selector, create_token

class RegisterApi(views.APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data

        serializer.instance = create_user(user_dc=data)

        return response.Response(data=serializer.data)
    
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

        resp.set_cookie(key="jwt", value=token, httponly=True)

        return resp