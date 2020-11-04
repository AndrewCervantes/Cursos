import math
#Ejercicio 1
def area_rectangulo(base,altura):
    return base * altura

print("El area del rectangulo es: ",area_rectangulo(15,10))

#Ejercicio 2
def area_circulo(radio):
    return math.pi*(radio*radio)

print("El area del circulo es: ", area_circulo(5))


#Ejercicio 3
def relacion(a,b):
    if a > b:
        return 1
    elif a < b:
        return -1
    else:
        return 0

print("Primer intento", relacion(5,10))
print("Segundo intento", relacion(10,5))
print("Tercero intento", relacion(5,5))