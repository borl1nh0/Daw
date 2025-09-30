from django.shortcuts import render

# Create your views here.
from .models import Ciudad, Cancha, Equipo

def home(request):
    return render(request, 'home.html')

def equipos(request):
    equipos = Equipo.objects.all()
    return render(request, 'equipos.html', {'equipos': equipos})

def canchas(request):
    canchas = Cancha.objects.all()
    return render(request, 'canchas.html', {'canchas': canchas})

def ciudades(request):
    ciudades = Ciudad.objects.all()
    return render(request, 'ciudades.html', {'ciudades': ciudades})
