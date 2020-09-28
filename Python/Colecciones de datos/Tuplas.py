#Tuplas.- Soncolecciones identicas a las listas pero no se pueden modificar.
#Definicion de Tupla, podemos identificarlas porque los datos van en ().
tupla = (100,'Hola',[1,2,3,4,5], -50,100)
print("Tupla completa: ",tupla)
print("Primer elemnto de tupla ",tupla[0])
print("Ultimo elemento de tupla ",tupla[-1])
print("Toda la tupla a partir de la posocion 2 ", tupla[2:])
print("Ultimo elemento de la lista que esta en la tupla ", tupla[2][-1])
print("Longitud de la tupla ",len(tupla))
print("Longitud de la lista que se encuentra en la tupla ", len(tupla[2]))

#Index.-  sirve para buscar un elemento y saber su posicion.
print("Indice en el que se ecnuentra 'Hola' ",tupla.index('Hola'))

#Count.-  Sirve para contar cuantas veces aparece un elemento en una tupla
print("¿Cuantas veces aparece el 100? ", tupla.count(100))
