class Estudiantes:
    def __init__ (self,nombre,edad,curso):
        self.nombre = nombre
        self.edad = edad
        self.curso = curso
        
        def mostrar_nombre(self):
            print("El nombre del estudiante es :",self.nombre)

estudiante1 = Estudiantes("Juan",42,"2ºDAW")
estudiante2 = Estudiantes("Pepe",24,"2ºDAW")
estudiante3 = Estudiantes("Josemi",25,"2ºDAW")

#lista de estudiantes
estudiantes = [estudiante1,estudiante2,estudiante3]
for estudiante in estudiantes:
    print("Nombre:",estudiante.nombre)
    print("Edad:",estudiante.edad)
    print("Curso:",estudiante.curso)
    print()