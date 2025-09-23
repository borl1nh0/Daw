
class FiguraGeometrica:
    def __init__(self, ancho, altura):
        self.ancho = ancho
        self.altura = altura

    def area(self):
        pass
    
class Rectangulo(FiguraGeometrica):
    def area(self):
        return self.ancho * self.altura
    
class Triangulo(FiguraGeometrica):  
    def area(self):
        return (self.ancho * self.altura) / 2
    
# Ejemplo de uso
rectangulo = Rectangulo(5, 10)     
triangulo = Triangulo(5, 10)

print("Área del rectángulo:", rectangulo.area())
print("Área del triángulo:", triangulo.area())