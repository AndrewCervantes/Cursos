try:
    n = float(input("Introduce un número: "))
    5/n
except TypeError:
    print("No se puede dividir el número por una cadena")
except ValueError:
    print("Debes introducir un número")
except ZeroDivisionError:
    print("No se puede dividir por cero, prueba otro número")
except Exception as e:# guardamos la excepción como una variable e
    print("Ha ocurrido un error ",type(e).__name__)



#Invoacion de Excepciones
def mi_funcion(algo = None):
    try:
        if algo is None:
            raise ValueError("Error! No se permite un valor nulo")
    except ValueError:
        print("Error! no se permite un valor nuelo(desde la excepcion)")
print(mi_funcion())