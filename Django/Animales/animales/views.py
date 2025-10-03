from django.shortcuts import render
from .models import *

# Create your views here.
def inicio(request):
    return render(request, 'web/inicio.html')

def protectora(request):
    protectoras = Protectora.objects.all()
    return render(request, 'web/lista_protectoras.html', {'lista_protectoras': protectoras})

def colaboradores(request):
    colaboradores = Colaborador.objects.all()
    return render(request, 'web/lista_colaboradores.html', {'lista_colaboradores': colaboradores})

def animales(request):
    animales = Animal.objects.all()
    return render(request, 'web/lista_animales.html', {'lista_animales': animales})
