class animal ():
    def __init__(self, nombre =""):
        self.nombre = nombre
    def mostrar_nombre(self):
        print(self.nombre)
    def __str__(self):
       return "nombre del animal "+ self.nombre

animal1 = animal("perro")
animal2 = animal("gato")



animal1.mostrar_nombre()
animal2.mostrar_nombre




    

         

