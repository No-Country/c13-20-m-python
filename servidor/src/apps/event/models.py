from django.db import models

# Create your models here.

# class EventManager()

class Event(models.Model):
    # eventHost = models.ForeignKey(Host, on_delete = models.CASCADE) # Puse host pero puede ser ORGANIZADOR o como se haya llamado 
    name = models.CharField(max_length = 200)
    description = models.TextField() 
    capacity = models.PositiveIntegerField(default = 0)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    virtual = models.BooleanField(default = False)
    state = models.BooleanField(default = True) # Si el boolean es true, el evento sigue activo
    ticketPrice = models.FloatField()
    eventImages  =  models.ImageField(null = True, blank = True, upload_to= 'images/')            # Para usar models.ImageField(upload_to = PATH   ) 
    #  el upload to hay que setearlo a un path existente donde se van a guardar las imagenes
    location = models.CharField(max_length = 200 ) #location field
    #dsafds
