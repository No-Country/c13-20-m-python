from django.db import models
from apps.user.models import User
from apps.event.models import Event

# Create your models here.

class Ticket(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
