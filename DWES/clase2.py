class animal():
    def __init__(self, nombre =""):
        self.nombre = nombre
    
    def decirNombre(self):
        return self.nombre
        
class perro(animal):
    def __init__(self):
        super().__init__("perro")
        
class gato(animal):
    def __init__(self):
        super().__init__("gato")
        
animal1 = perro()
animal2 = gato()
animal3 = animal("cerdo")

#print (animal1.decirNombre())
#print (animal2.decirNombre())
#print (animal3.decirNombre())
    