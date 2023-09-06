from django.db import models
from apps.user.models import User
from .category import Category
from django.core.exceptions import ValidationError

class Event(models.Model):
    categories = models.ManyToManyField(Category, blank=True)
    eventHost = models.ForeignKey(User, on_delete = models.CASCADE)
    name = models.CharField(max_length = 200)
    description = models.TextField() 
    capacity = models.PositiveIntegerField(default = 0)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    virtual = models.BooleanField(default = False)
    state = models.BooleanField(default = True) # Si el boolean es true, el evento sigue activo
    ticketPrice = models.FloatField()
    event_images  =  models.ImageField(null = True, blank = True, upload_to= 'images/')            # Para usar models.ImageField(upload_to = PATH   ) 
    #  el upload to hay que setearlo a un path existente donde se van a guardar las imagenes
    location = models.CharField(max_length = 200 ) #location field
    tickets_sold = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name
    
    def clean(self):
        super().clean()

        if self.tickets_sold < 0:
            raise ValidationError("El número de boletos vendidos no puede ser negativo.")

        if self.tickets_sold > self.capacity:
            raise ValidationError("El número de boletos vendidos no puede superar la capacidad del evento.")
    
