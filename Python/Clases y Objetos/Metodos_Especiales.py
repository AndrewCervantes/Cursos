#Metodos especiales
class Pelicula:
    #Constructor de la clases
    def __init__(self,titulo,duracion,fecha):
        self.titulo = titulo
        self.duracion = duracion
        self.fecha = fecha
        print("Se ha creado la pelicula", self.titulo)
    
    #Redefinir el metodo string
    def __str__(self):
        return "{} se estreno el {} con una duración de {} minutos".format(self.titulo,self.fecha, self.duracion)

    #Redefinir el metodo length
    def __len__(self):
        return self.duracion

    #Destructor de la clase
    def __del__(self):
        print("Se ha eliminado la pelicula", self.titulo)


#Creando objeto
avengers = Pelicula("Infinity War", 180,2019)
#Convertir en un string atributos de un objeto
print(str(avengers))
#Longitud de un atributo de un objeto
print(len(avengers))
#Elminando elemrntos de una tributo
del(avengers)
