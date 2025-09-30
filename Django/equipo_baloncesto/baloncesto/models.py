from django.db import models

# Create your models here.
class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)
    def __str__(self):
        return self.nombre

class Cancha(models.Model):
    nombre = models.CharField(max_length=100)
    capacidad = models.IntegerField()
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre
    
class Equipo(models.Model):
    nombre = models.CharField(max_length=100)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    pais = models.CharField(max_length=100)
    def __str__(self):
        return self.nombre