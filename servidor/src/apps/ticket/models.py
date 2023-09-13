from django.db import models
from apps.user.models import User
from apps.event.models import Event

# Create your models here.

class Ticket(models.Model):
    type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

class Order(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    total_price = models.FloatField()
    number_tickets = models.PositiveIntegerField(default=0)


"""
{
"first_name",
"last_name",
"email",
"phone_number",
"number_tickets",
}

"""