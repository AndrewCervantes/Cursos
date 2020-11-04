#Ejercicio 1
try:
    resultado = 10/0
except ZeroDivisionError:
    print("No se puede dividir por cero, prueba otro número")

#Ejercicio 2
try:
    lista = [1, 2, 3, 4, 5]
    lista[10]
except IndexError:
    print("Error \t El indice se encuentra fuera del rango, \n"
            "\t debes de utilizar un número mayor o igual que cero \n"
            "\t y menor que la longitud de la lista.")
except Exception as e:# guardamos la excepción como una variable e
    print("Ha ocurrido un error ",type(e).__name__)


#Ejercicio 3
try:
    colores = { 'rojo':'red', 'verde':'green', 'negro':'black' } 
    colores['blanco']
except KeyError:
    print("Error: \t La clave que estas solicitando no exites en el dinccionario, \n"
            "\t debes de utilizar un dato de los existentes \n")

#Ejercicio 4
try:
    resultado = 15 + "20"
except TypeError:
    print("Error: \t No se puede realizar la suma entre un numero y una cadena")


#Ejerciio 5
elementos = [1, 5, -2]

# Completa el ejercicio aquí
def agregar_una_vez(lista, el):
    try:
        if el in lista:
            raise ValueError
        else:
            lista.append(el)
    except ValueError:
        print("Error: Imposible añadir elementos duplicados =>", el)

agregar_una_vez(elementos, 10)
agregar_una_vez(elementos, -2)
agregar_una_vez(elementos, "Hola")

print(elementos)
