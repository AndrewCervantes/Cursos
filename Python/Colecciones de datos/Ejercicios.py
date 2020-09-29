#Conjuntos
usuarios = {'Marta','David','Elvira','Juan','Marcos'}
administradores = {'Juan', 'Marta'}
print(administradores)
print(usuarios)

#Eliminar un elemento de un conjunto "discard"
administradores.discard('Juan')
print(administradores)

administradores.add('Marcos')

for user in usuarios:
    if user in administradores:
        print(user, " es administrador")
    else:
        print(user, " no es administrador")
print()
print()

#Diccionarios
caballero = { 'vida':2, 'ataque':2, 'defensa': 2, 'alcance':2 }
guerrero  = { 'vida':2, 'ataque':2, 'defensa': 2, 'alcance':2 }
arquero   = { 'vida':2, 'ataque':2, 'defensa': 2, 'alcance':2 }

caballero['vida']= guerrero['vida'] *2
caballero['defensa']= guerrero['defensa'] *2
guerrero['ataque']= caballero['ataque'] *2
guerrero['alcance']= caballero['alcance'] *2
arquero['vida']= guerrero['vida']
arquero['ataque'] =  guerrero['ataque']
arquero['defensa']= guerrero['defensa'] /2
arquero['alcance']= guerrero['alcance'] *2

print("Caballero: \t", caballero)
print("Guerrero: \t", guerrero)
print("Arquero: \t",arquero)

#Colas
tareas = [ 
    [6, 'Distribución'],
    [2, 'Diseño'],
    [1, 'Concepción'],
    [7, 'Mantenimiento'],
    [4, 'Producción'],
    [3, 'Planificación'],
    [5, 'Pruebas']
]

print("==Tareas ordenadas==")
for tarea in tareas:
    print(tarea[0], tarea[1])

from collections import deque
tareas.sort()
cola=deque()
for c in tareas:
    cola.append(c[1])
print("==Tareas ordenadas==")
for tareas in cola:
    print(tareas)

