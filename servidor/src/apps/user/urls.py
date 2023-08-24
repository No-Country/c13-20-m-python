from django.urls import path
from .api.views import RegisterApi, LoginApi

urlpatterns = [
    path('register/', RegisterApi.as_view(), name='register'),
    path('login/', LoginApi.as_view(), name="login")
]