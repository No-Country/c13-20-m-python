from django.urls import path
from .views import RegisterView, LoginView, UserApi, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name="login"),
    path('me/', UserApi.as_view(), name="me"),
    path('logout/', LogoutView.as_view(), name="logout")
]