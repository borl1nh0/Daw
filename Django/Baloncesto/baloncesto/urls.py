from django.urls import path
from .views import home, ciudades_lista, equipos_lista, canchas_lista

app_name = "baloncesto"

urlpatterns = [
    path("", home, name="home"),
    path("ciudades/", ciudades_lista, name="ciudades"),
    path("equipos/", equipos_lista, name="equipos"),
    path("canchas/", canchas_lista, name="canchas"),
]
