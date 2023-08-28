from rest_framework import views,response,exceptions,permissions
from .serializer import EventSerializers
from apps.user import authentication

# Create your views here.

class EventApi(views.APIView):
    authentication_classes = (authentication.CustomUserAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )

    def get(self,request):
        user = request.user
        serializer = EventSerializers(user)

        return response.Response(serializer.data)
