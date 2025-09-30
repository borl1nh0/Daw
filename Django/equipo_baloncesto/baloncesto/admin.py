from django.contrib import admin

# Register your models here.
from .models import Ciudad, Cancha, Equipo

admin.site.register(Ciudad)
admin.site.register(Cancha)
admin.site.register(Equipo)

