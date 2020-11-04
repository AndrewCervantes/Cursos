#Errores semánticos
#Estos errores son muy difíciles de identificar porque van ligados al sentido del funcionamiento y dependen de la situación. Algunas veces pueden ocurrir y otras no.
lista =[1,2,3]
if len(lista) > 0:
    lista.pop()

print(lista)

n = float(input("Introduce un numero: "))
m = 4
print("{}/{}={}".format(n,m,n/m))