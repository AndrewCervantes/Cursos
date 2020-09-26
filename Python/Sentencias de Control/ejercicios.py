print("Menu")
num1 = int(input("Introduce un número: "))
num2 = int(input("Introduce otro numero: "))
print("1.- Suma de dos números.")
print("2.- Resta de dos números. ")
print("3.- Multiplicacion de dos números.") 
opc = int(input("Elija una opcion: "))
if opc == 1:
    print("La suma es: ", num1+num2)
elif opc == 2:
    print("La resta es: ", num1-num2)
elif opc == 3:
    print("La multiplicación es: ", num1*num2)
else:
    "Esta opción no es válida"

#Ejercicio 2
num = True
while(num):
    impar = int(input("Introduce un numero impar: "))
    if (impar %2 == 1):
        num = False
    else:
        num = True

#Ejercicio 3
suma = sum(range(0,101,2))
print(suma)

#Forma con ciclos
i = 0
suma2 = 0
while ( i < 101):
    if (i %2 == 0):
        suma2 += i
    i+=1 
print(suma2)

#Ejercicio 4
i = 1
valores = 0
num = int (input("¿Cuantos numeros quieres introducir?"))
while (i <= num):
    valores += int(input("Introduce los valores: "))
    i+=1
print ("El promedio es: ",valores/num )

# Ejercicio 5
num = True
lista = [1,3,6,9]
while(num):
    numero = int(input("Introduce un numero impar: "))
    if ( numero >= 0 and numero <= 9):
        num = False
    else:
        print("Numero incorrecto")
        num = True
if numero in lista:
    print("El numero ", numero, "se encuentra en la lista ", lista)
else:
    print("el numero ", numero, " no se encuentra en la lista ", lista)

#Ejercicio 6
print(list(range(0,11)))
print(list(range(-10,1)))
print(list(range(0,21,2)))
print(list(range(-19,0,2)))
print(list(range(0,51,5)))


#Ejercicio 7
lista_1 = ["h",'o','l','a',' ', 'm','u','n','d','o']
lista_2 = ["h",'o','l','a',' ', 'l','u','n','a']

lista_3 = []
for letra in lista_1:
    if letra in lista_2 and letra not in lista_3:
        lista_3.append(letra)

print(lista_3)