from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, first_name:str, last_name:str, email:str, username:str, password:str = None, 
                    is_staff=False, is_superuser=False, age=None, phone_number = None) -> "User":
        if not email:
            raise ValueError("User must have an email")
        if not username:
            raise ValueError("User must have an username")
        if not first_name:
            raise ValueError("User must have a first name")
        if not last_name:
            raise ValueError("User must have a last name")

        user = self.model(email=self.normalize_email(email), username=username)
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.is_active = True
        user.is_staff = is_staff
        user.is_superuser = is_superuser
        user.age = age
        user.phone_number = phone_number
        user.save()

        return user
    
    def create_superuser(self, first_name:str, last_name:str, email:str, username: str, password:str = None) -> "User":
        user = self.create_user(
            first_name=first_name, 
            email=email, 
            username=username,
            password=password, 
            last_name=last_name,
            is_staff=True,
            is_superuser=True
        )
    
        return user

class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=255)
    image = models.ImageField(upload_to='users/%Y/%m/%d', null=True, blank=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    age = models.IntegerField(null=True, default=None)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, null=True, blank=True)


    GENDER_CHOICES = [
        ('M', 'Mujer'),
        ('H', 'Hombre'),
    ]

    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        null=True,
        blank=True,
    )

    objects = UserManager()

    REQUIRED_FIELDS=["first_name", "last_name", "email"]
