a = 10 
#Suma en asignación
a += 5
print("Valor de Suma:",a)
#Resta en asignación
a -= 5
print("Valor de Resta:",a)

#Producto en asignación
a *= 2
print("Valor de Producto:",a)

#División en asignación
a /= 4
print("Valor de Division:",a)

#Módulo en asignación
a %=2
print("Valor de Modulo",a)

#Módulo en potencia
a **=2
print("Valor de Potencias", a)

#Ejemplo
def main():
    n = 0 
    while (n < 10):
        if(n % 2) == 0:
            print(n,"Es un número par")
        else:
            print(n,"Es un número impar")
        n+=1 #Equivale a n = n + 1
main()

#Ejercicio
numero_magico = 12345679
numero_usuario = int(input("Introduce un número entre 1 y 9: "))
numero_usuario *= 9
numero_magico *= numero_usuario
print(numero_magico)