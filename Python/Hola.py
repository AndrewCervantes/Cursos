#Hello world
print ("Hello Wordl!")
#División 
print (3/2)

#Modulo
print(3%2)

#Potencias
print(3**2)


#Indices
word = 'Python'
print(word[0]) #Caracter en la posición 0.
print(word[-1])#Cuando el inidice es negativo, Va inverso, el conteo empieza desde el ultimo carcter.

#Slicing 
#El slicing es una capacidad de las cadenas que devuelve un subconjunto o subcadena utilizando dos índices [inicio:fin]
#El primer índice indica donde empieza la subcadena (se incluye el carácter).
#El segundo índice indica donde acaba la subcadena (se excluye el carácter).
print (word[2:5])
#Si dejamos vacio el segundo indice, nos muestra el resto de la cade a partir del primer indice
print ("Indice 2 vaacio: "+word[3:])
#Si dejamos vacio el primer indice, nos muestra el inicio de la cadena hasta el segundo indice.
print("Indice 1 vacio: "+word[:3])