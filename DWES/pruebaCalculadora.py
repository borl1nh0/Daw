import unittest

from calculadora import Calculadora


class TestCalculadora(unittest.TestCase):
    def setUp(self):
        print ("Iniciando test")
        self.calculadora = Calculadora(8,2)
    
    def test_suma(self):
        print("Prueba de suma correcta:")
        
        self.assertEqual(self.calculadora.sumar(), 10, "La suma es correcta")
        
    def test_suma_erronea(self):
        print("Prueba de suma correcta:")
      
        self.assertNotEqual(self.calculadora.sumar(), 11, "La suma es erronea")
    
    def test_resta(self):
        print("Prueba de resta correcta:")
        
        self.assertEqual(self.calculadora.restar(), 6, "La resta es correcta")
        
    def test_resta_erronea(self):
        print("Prueba de resta correcta:")
      
        self.assertNotEqual(self.calculadora.restar(), 5, "La resta es erronea")
        
    def test_multiplicar(self):
        print("Prueba de multiplicar correcta:")
        
        self.assertEqual(self.calculadora.multiplicar(), 16, "La multiplicacion es correcta")
        
    def test_multiplicar_erronea(self):
        print("Prueba de multiplicar correcta:")
      
        self.assertNotEqual(self.calculadora.multiplicar(), 11, "La multiplicacion es erronea")
    
    def test_dividir(self):
        print("Prueba de dividir correcta:")
        
        self.assertEqual(self.calculadora.dividir(), 4, "La division es correcta")
        
    def test_dividir_erronea(self):
        print("Prueba de dividir correcta:")
      
        self.assertNotEqual(self.calculadora.dividir(), 11, "La division es erronea")
        
if __name__ == '__main__':
    unittest.main()
    