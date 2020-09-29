#PILAS (Stack)
# Es una coleccion de elementos ordenados, El ultimo en entrar es el primero en salir
#LIFO - Last In First Out.

pila = [1,2,3,4,5]
#Meter Elementor
pila.append(6)
pila.append(7)
print("Pila inicial",pila)

#Eliminar el ultimo elemento de la pila "pop"
pila.pop()
print("Pila con pop",pila)


#COLAS (Deque)
# Es una coleccion en donde el primer elemento en entrar es el ultimo en salir.
#FIFO - First In First Out

#importar libreria de collecciones 
from collections import deque
cola = deque()
print(cola)

cola = deque(['Andres','Mikhail', 'Jesus'])
print("Cola con valores",cola)

#Agregar elementos a la cola
cola.append('Gaby')
print("Cola con append",cola)

#Quitar valores
cola.popleft()
print("Cola con popleft",cola)