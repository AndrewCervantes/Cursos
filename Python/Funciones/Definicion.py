#Declaracion de funcion
def saludar():
    #Contenido de la función
    print("Hola ! este print llama desde la función saludar()")

#LLamar la función
saludar()


#Ejemplo Tabala de multiplicar
def tabla5():
    for i in range(10):
        print("5 * ",i," = ",i*5)

tabla5()


# +++++++++++++++++ RETORNO DE VALORES +++++++++++++++++++++++
def test():
    return "Una cadena retornada" #Despues del return ya no hara caso.
c = test()
print(c)

#Retornando listas
def listas():
    return [1,2,3,4,5]
print("Lista completa: ", listas())
print("Ultimo valor de la lista: ", listas()[-1])

#Optimizando un poco de memoria
lista = listas()
print("Ultimo valor de la lista: ",lista[-1])


def tupla():
    return "Una cadena",20,[1,2,3,4,5]

print("Tupla: ", tupla())

c,e,l = tupla()
print("c es: ", c)
print("Ee es el entero: ",e)
print("l es la lsita: ",l)

