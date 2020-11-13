###########  MÉTODO  ###########


#Argumento self

#Self sirve para referenciar a la instancia de la clase es decir diferenciar entre un metodo y un metodo de una clase.
#instancia significa crear un objeto a partir de una clase.
#Todos los metodos dentro de una clase deben de contener el atributo self.
#Los objetos son conscientes de que exiten.
#Si ejecutamos un método desde un objeto, se envía un primer argumento implicito que hace referencia al propio objeto
class Galleta:
    chocolate = False
    def saludar(self):
        print("Hola soy una galleta")


#Se crea un objeto galleta
galleta = Galleta()
#El objeto galleta manda a llamar el metodo saludar()
galleta.saludar()



#Metodo init : El constructor es un método que se llama automáticamente al crear un objeto, se define con el nombre init
#La finalidad del constructor es, como su nombre indica, construir los objetos. Por esa razón permite sobreescribir el método que crea los objetos, permitiéndonos enviar datos desde el principio para construirlo:
print()
print("Metodo INIT y parametró self")

class Laptop():
    touch = False
    # __init__  Se coloca __ debido a que es una función espcial y es el constructor de la clase.
    def __init__(self, bocinas, color):
        self.bocinas = bocinas
        self.color = color
        print("Se acaba de crear un laptop {} de color {}".format(bocinas,color))
        #Asginar atributos de clase

        print("Se acaba de crear una laptop.")
        #
    
    def laptop_touch(self):
        #Esta es una variable interna del método
        #touch = True
        #Si quiero referenciar el atributo de la clase
        self.touch= True
    
    def es_laptop_touch(self):
        if(self.touch):
            print("La laptop es touch")
        else:
            print("La laptop no es touch :(")

#Se crea el objeto dell
dell = Laptop("JBL","Azul")
#El atributo es false
dell.es_laptop_touch()
# Llamar un metodo
dell.laptop_touch()
#El atributo es true
dell.es_laptop_touch()
print(dell.touch)

