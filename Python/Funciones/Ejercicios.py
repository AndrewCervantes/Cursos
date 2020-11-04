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


#Ejercicio 4
def intermedio(a,b):
    return (a+b)/2

print("Intermedio: ", intermedio(-12,24))


#Ejercicio 5
def recortar(numero, minimo, maximo):
    if numero < minimo:
        return minimo
    elif numero > maximo:
        return maximo
    else:
        numero

print("Recortar: ", recortar(15,0,10))

#Ejercicio 6
def separar(lista):
    lista.sort()
    pares = []
    impares = []
    for numeros in lista:
        if numeros%2 == 0:
            pares.append(numeros)
        else:
            impares.append(numeros)
    return pares, impares

pares, impares = separar([-12, 84, 13, 20, -33, 101, 9])
print("Lista de pares: ", pares)
print("Lista de impares: ",impares)