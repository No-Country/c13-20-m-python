from django.urls import path
from .views import RegisterApi, LoginApi, UserApi, LogoutApi

urlpatterns = [
    path('register/', RegisterApi.as_view(), name='register'),
    path('login/', LoginApi.as_view(), name="login"),
    path('me/', UserApi.as_view(), name="me"),
    path('logout/', LogoutApi.as_view(), name="logout")
]