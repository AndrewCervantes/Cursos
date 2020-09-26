print("Ciclo While")
#Recorrido de lista con ciclo while.
numeros = [1,2,3,4,5,6,7,8,9,10]
i = 0
while(i < len(numeros)):
    print(numeros[i])
    i+=1
#Recorrido de lista con Ciclo for
print()
print("Ciclo For")
for i in numeros:
    print(i)

#Modificar el contenido de una lista.
i = 0
lista_num = [1,2,3,4,5,6,7,8,9,10]
for num in lista_num:
    lista_num[i]*= 10
    i+=1
print(lista_num)

# Funcion enumerate().- obtiene valor y indice en una iteracion
for indice,valor in enumerate(lista_num):
    lista_num[indice]*=100
print(lista_num)


#Recorrer cadena
cadena ="Hola Amigos"
for caracter in cadena:
    print(caracter)

#Modificar una cadena
cadena2 =""
for caracter in cadena:
    cadena2 += caracter*2
print(cadena2)