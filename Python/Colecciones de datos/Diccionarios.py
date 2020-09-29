# Son un conjunto de colecciones más utilizadas y se basan en una estructura mapeada donde cada elemento de la colección se encuentra identificado con una clave unica.
#Diccionario vacio
vacio = {}
print(vacio)
print(type(vacio))
# Definicion de Diccionario de colores
# nombreDiccionario = {clave:valor}
colores ={'amarillo':'yellow', 'azul':'blue', 'verde':'green'}
print("Diccinonario de colores: ", colores)
#Acceder a un elemento es por medio de la clave
print("Como se dice el color amarillo -", colores['amarillo'])
#Modificar los registros
colores['azul'] = 'blue ligth'
print(colores)

#Borrar un valor "del"
del(colores['azul'])
print(colores)

#Reccorer un diccionario "item"
team = {'Christian':'Tester', 'Aiko':'Analyst', 'Andres':'FrontEnd Developer','Edgar':'BackEnd Developer' }
for nombre,ocupacion in team.items():
    print(nombre,ocupacion)

#Colecciones de datos avanzadas
personajes = []
p = {'Nombre':'Thor', 'clase':'Dios del trueno', 'Raza':'Dios'}
personajes.append(p)
p = {'Nombre':'Capitan America', 'clase':'Soldado', 'Raza':'Humano'}
personajes.append(p)
p = {'Nombre':'Iron Man', 'clase':'Vengador', 'Raza':'Humano'}
personajes.append(p)
print(personajes)

for p in personajes:
    print(p['Nombre'],p['clase'],p['Raza'])
