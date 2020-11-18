class Pelicula:

    #Constructor de la clases
    def __init__(self,titulo,duracion,fecha):
        self.titulo = titulo
        self.duracion = duracion
        self.fecha = fecha
        print("Se ha creado la pelicula", self.titulo)
    
    #Redefinir el metodo string
    def __str__(self):
        return "{}  ({})".format(self.titulo,self.fecha)

class Catalogo:
    #Lista vacia
    peliculas = []
    #Constructor.- Se manda como parametro una lista vacia
    def __init__(self, peliculas=[]):
        self.peliculas = peliculas

    def agregar(self, p):
        #al atributo (lista) se le agrega el elemento p
        self.peliculas.append(p)
    
    def mostrar(self):
        print("Las peliculas con las que cuenta el catalogo de Marvel son:")
        for p in self.peliculas:
            print(p)

    #Pendiente
    def modificar_pelicula(self,p):
        pass




avengers = Pelicula("Infinity War",180,2019)
#A la clase Catalogo se agrega el objeto avengers.
marvel = Catalogo([avengers])
#Agregar una nueva pelicula 
marvel.agregar(Pelicula("Thor Ragnarok",190,2018))
marvel.mostrar()