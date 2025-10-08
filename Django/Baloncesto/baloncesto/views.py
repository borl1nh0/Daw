from django.shortcuts import render
from .models import Ciudad, Equipo, Cancha  # 👈 relativo, correcto

def home(request):
    return render(request, "baloncesto/home.html")

def ciudades_lista(request):
    ciudades = Ciudad.objects.all()
    return render(request, "baloncesto/ciudades.html", {"ciudades": ciudades})

def equipos_lista(request):
    equipos = Equipo.objects.select_related("ciudad").all()
    return render(request, "baloncesto/equipos.html", {"equipos": equipos})

def canchas_lista(request):
    canchas = Cancha.objects.select_related("ciudad").all()
    return render(request, "baloncesto/canchas.html", {"canchas": canchas})
