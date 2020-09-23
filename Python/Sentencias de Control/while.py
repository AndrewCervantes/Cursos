#While
#Es un ciclo el cual consiste en repetir un bloque a partir de evaluar una condición logica, siempre que esta se cumple.
print("Senticia While.")
c = 0 
#Condicion
while( c <= 5 ):
    c+=1 #Contador
    if ( c == 3 or c == 4):
        continue
    print("El valor de 'c' es ",c)
else: 
    print("Se ha completado la iteración y el valor de 'c' es ",c)
print()
print()
#Menu Iterativo
print("Menu.")
while(True):
    print("1.- Say Hello!")
    print("2.- Add two numbers ")
    print("3.- Substract two numbers")
    print("4.- Exit")
    opcion = int(input("Choose one option: "))
    if opcion == 1:
        print("Hello Bro !")
    elif opcion == 2 or opcion == 3:
        num1 = int(input("Insert first number: "))
        num2 = int(input("Insert second number. "))
        if opcion == 2:
            print("Result of the Addition: ", num1+num2)
        else:
            print("Result of the Substration: ", num1-num2)
    elif opcion == 4:
        print("See you later!")
        break
    else:
        print("Option Incorrect, choose another option again.")

