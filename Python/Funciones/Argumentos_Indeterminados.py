#Argumentos indeterminados.
#Por posición
#Para recibir un número indeterminado de parámetros por posición, debemos crear una lista dinámica de argumentos (una tupla en realidad) definiendo el parámetro con un asterisco
def intdereminados_posicion (*args):
    print ("Tupla Argumentos indeterminados ")
    for arg in args:
        print(arg)

intdereminados_posicion(5,"Hola Python",[1,2,3,4,5])

#Por nombre
#Para recibir un número indeterminado de parámetros por nombre (clave-valor o en inglés keyword args), debemos crear un diccionario dinámico de argumentos definiendo el parámetro con dos asteriscos:
def indeterminados_nombre(**kwargs):
    print ("Diccionario con argumentos indeterminados")
    for kw in kwargs:
        print(kw, " ",kwargs[kw])

indeterminados_nombre(num = 5, cad = "Hola Python", list = [9,8,7,6,5])


#Por nombre y posición
def super_funcion(*args,**kwargs):
    t = 0
    for arg in args:
        t = t + arg
    print("Suma total indeterminado es ",t)
    for kw in kwargs:
        print(kw," ", kwargs[kw])

super_funcion(10,50,-1,1.56, nombre ="Christian", edad= 23)