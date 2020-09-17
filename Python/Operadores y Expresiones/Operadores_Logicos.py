#  NOT (negación lógica).
print (not True)

# AND (unión lógica)
a = 15
print (a>10 and a <20)
b = "Hello World"
print(len(b) >= 10 and b[0] == 'H')

# OR (separación lógica)
a = "Exit"
print (a[0] == 'E' or a[-1] == 't')

#Ejercicio 1
def main ():
    num1 = int(input("Introduce el primer valor:"))
    num2 = int(input("Introduce el segundo valor:"))
    print("Son números iguales:", num1 == num2)
    print("Son número diferentes:", num1 != num2)
    print("El primero es mayor o igual:", num1>=num2)
    print("El primer numero es menor o igual:", num1 <= num2)
#main()
#Ejercicio 2
def main2 ():
    cadena = input("Introduce una cadena:")
    print("¿La longitud de la cadena es mayor o igual que 3 y menor que 10?",
        len(cadena)>=3 and len(cadena)<10)
main2()