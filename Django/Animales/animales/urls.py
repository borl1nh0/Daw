from django.urls import path
from .views import *

urlpatterns = [
    path('', inicio, name='inicio'),
    path('protectoras/', protectora, name='lista_protectoras'),
    path('colaboradores/',colaboradores, name='lista_colaboradores'),
    path('animales/',animales, name='lista_animales'),
    ]
