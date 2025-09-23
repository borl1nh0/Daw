class Calculadora: 
    
    def __init__(self,num1,num2):
        self.num1 = num1
        self.num2 = num2
    
    def sumar(self):
        return self.num1 + self.num2 
    
    def restar(self):
        return self.num1 - self.num2
    
    def multiplicar(self):
        return self.num1 * self.num2
    
    def dividir(self):
        if num2 != 0:
            return self.num1 / self.num2  
        else:
            return ("No se puede dividir por cero")
        
num1 = int(input("Introduce el primer numero: "))
num2 = int(input("Introduce el segundo numero: "))


suma = Calculadora(num1,num2)
#resta = Calculadora(num1,num2)
#multiplicacion = Calculadora(num1,num2)
#division = Calculadora(num1,num2)

#print(suma.sumar())
#print(resta.restar())
#print(multiplicacion.multiplicar())
#print(division.dividir())