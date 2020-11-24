#Clase Madre o SuperClase
class Producto:
    #Los atributos con None hace referencia de que nos son parametros obligatorio
    def __init__(self,referencia,nombre,pvp,descripcion):
        self.referencia = referencia
        self.nombre = nombre
        self.pvp = pvp
        self.descripcion = descripcion
    def __str__(self):
        return """\
        REFERENCIA\t{}
        NOMBRE\t\t{}
        PVP\t\t{}
        DESCRIPCION\t{}""".format(self.referencia, self.nombre, self.pvp, self.descripcion)
    

#Clase Hija de producto
class Adorno(Producto):
    pass

#Clase Hija de producto
class Alimento(Producto):
    productor = ""
    distribuidor = ""

    def __str__(self):
        return """\
        REFERENCIA\t{}
        NOMBRE\t\t{}
        PVP\t\t{}
        DESCRIPCION\t{}
        PRODUCTOR\t{}
        DISTRIBUIDOR\t{}""".format(self.referencia, self.nombre, self.pvp, self.descripcion, self.productor, self.distribuidor)

#Clase Hija de producto
class Libro(Producto):
    isbn = ""
    autor = ""

    def __str__(self):
        return """\
        REFERENCIA\t{}
        NOMBRE\t\t{}
        PVP\t\t{}
        DESCRIPCION\t{}
        ISBN\t\t{}
        AUTOR\t\t{}""".format(self.referencia, self.nombre, self.pvp, self.descripcion, self.isbn, self.autor)


#Objeto de la clase adorno
ad = Adorno(2034,"Vaso Adornado",15, "Vaso de porcelana adornado con arboles")


#Objeto de la clase alimento
al = Alimento(2035,"Botellade Aceite",5,"250 ML")
al.productor = "La Aceitera"
al.distribuidor = "Distribuiciones SA"


#Objeto de la clase libroo
li =Libro(2036,"Cocina Mediterranea",9,"Recetas Sanas y buenas")
li.isbn = "0-123456-78-9"
li.autor = "Doña Juana"

#Objetos en la lista
productos = [ad, al]
productos.append(li)

#
def rebajar_producto(p,rebaja):
    """Devuelve un producto con una rebaja en procentaje de su precio"""
    p.pvp = p.pvp -(p.pvp/100* rebaja)
    return p
al_rebajado = rebajar_producto(al,10)



#Recorrer una lista de objetos
for p in productos:
    print(p,"\n")


#Recorrer una lista de objetos de las clases hijas
for p in productos:
    #Si el objeto p es de tipo Ardono
    if(isinstance(p,Adorno)):
        print(p.referencia,p.nombre)
    elif (isinstance(p, Alimento)):
        print(p.referencia,p.nombre, p.productor)
    elif (isinstance(p, Libro)):
        print(p.referencia,p.nombre, p.isbn)

print(al_rebajado)