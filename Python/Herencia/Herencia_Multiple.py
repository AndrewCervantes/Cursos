#Posibilidad de que una subclase puede heredar de multiples super clases.
class A:
    def __init__(self):
        print("Soy de clase A")
    def a(self):
        print("Este método lo heredo de A")
class B:
    def __init__(self):
        print("Soy de clase B")
    def b(self):
        print("Este método lo heredo de B")

class C(A,B):
    def c(self):
        print("Este método es único de C")

#Si tiene metodos o atributos iguales, se considera de Izquierda a derecha.
# c es un objeto de la clase C
c = C()
print(c)
print(c.a())
print(c.b())
print(c.c())


