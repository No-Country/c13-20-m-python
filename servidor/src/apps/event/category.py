from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    #agregar otros campos
    
    def __str__(self):
        return self.name