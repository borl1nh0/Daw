from . import views
from django.urls import path
urlpatterns = [
    path('', views.animales, name='home'),
    path('animales/', views.animales, name='animales'),
    path('protectoras/', views.protectoras, name='protectoras'),
    path('colaboradores/', views.colaboradores, name='colaboradores'),
 ]