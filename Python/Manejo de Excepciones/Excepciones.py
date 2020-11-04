#Excepciones
#Las excepciones son bloques de código que nos permiten continuar con la ejecución de un programa pese a que ocurra un error.
#Opcion uno
while(True):
    try:
        n = float(input("Introduce un numero: "))
        m = 4
        print("{}/{}={}".format(n,m,n/m))
        break #Importante romper la iteración si todo sale bien.
    except:
        print("Ha ocurrido un error, introduce bien el numero")


#Opcion dos
while(True):
    try:
        n = float(input("Introduce un numero: "))
        m = 4
        print("{}/{}={}".format(n,m,n/m))
    except:
        print("Ha ocurrido un error, introduce bien el numero")
    else:
        print("Todo a salido bien") 
        break #Importante romper la iteración si todo sale bien.

#Opcion con Finally
while(True):
    try: #Capturar cualquier tipo de error dentro de un bloque de instrucciones.
        n = float(input("Introduce un numero: "))
        m = 4
        print("{}/{}={}".format(n,m,n/m))
    except: #Definir el codigo excepcional
        print("Ha ocurrido un error, introduce bien el numero")
    else: #Definir el codigo que se ejecutara si no hay error
        print("Todo a salido bien") 
        break #Importante romper la iteración si todo sale bien.
    finally: # Definir el codigo que se ejecutara al final haya o no un error.
        print("Fin de la iteración")