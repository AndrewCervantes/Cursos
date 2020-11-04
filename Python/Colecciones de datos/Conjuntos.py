#Conjuntos.
#Son colecciones desordenadas de elementos únicos(no se repiten) para hacer pruebas de pertencia a grupos y eliminacion de elementos duplicados.
#Conjunto vacio de elementos.
conjunto = set()
print(conjunto)
#Conjunto con valores, podemos identificar conjuntos por {}
conjunto = {1,2,3,4,5}
print("Conjunto con valores ", conjunto)
# Add .- sirve para agregar elementos 
conjunto.add(6)
print(conjunto)
conjunto.add(0)
print(conjunto)
conjunto.add('H')
conjunto.add('A')
conjunto.add('Z')
print(conjunto)
# in sirve para indicar si se encuentra el elemento en el conjunto
grupo = {'Gaby','Andres','Christian','Alan','Edgar'}
if 'Gaby' in grupo and 'Yazmin' not in grupo :
    print("Estan en el grupo")
else:
    print("No esta en el grupo")

#Conversion de lista a conjuto
lista = [1,2,3,3,2,1]
print("Lista de datos: ", lista)
conjunto = set(lista)
print("Lista convertida en conjunto ",conjunto)
lista = list(conjunto)
print("la variable lista ya tiene los datoss de un conjunto: ", lista)

#Forma abreviada
lista = [1,2,3,4,4,3,2,1]
lista = list(set(lista))
print(lista)
