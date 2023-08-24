from django.urls import path
from .api.views import RegisterApi

urlpatterns = [
    path('register/', RegisterApi.as_view(), name='register')
]