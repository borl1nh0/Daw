from django.contrib import admin

# Register your models here.

from .models import Ciudad, Equipo, Cancha


admin.site.register(Ciudad)
admin.site.register(Equipo)
admin.site.register(Cancha)
