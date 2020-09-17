#Listas 
#Las listas se tratan de un tipo compuesto de dato que puede almacenar distintos valores (llamados ítems o elementos) ordenados entre [ ] y separados con comas
club =['America','Guadalajara','Cruz Azul', 'Pumas']
print(club)
print('El mejor club en méxico es:'+ club[0])
new_club = club + ['Tigres','Monterrey']
print(new_club)
#Añadir elementos al final
club.append('Santos')
print(club)
#Listas con Slicing
abecedario = ['a','b','c','d','e']
print(abecedario[:3])
abecedario[:3] = ['A','B','C']
print(abecedario)

#Lectura por teclado 
#String
cadena = input("Introduce una cadena: ")
print(cadena)
#Numero entero
valor = int(input("Introduce un valor: "))
print (valor + 100)
#Numero flotante 
valor_decimal = float(input("Introduce un valor: "))
print (valor_decimal + 10.50)