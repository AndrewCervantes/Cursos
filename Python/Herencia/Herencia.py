# Herencia
#Capacidad de una clase de heredar atrributos y métodos de otra, además de agregar de nuevos o modificar los heredados.

class Producto:
    #Los atributos con None hace referencia de que nos son parametros obligatorio
    def __init__(self,referencia,tipo,nombre,pvp,descripcion,productor = None, dsitribuidor = None, isbmn = None, autor = None):
        self.referencia = referencia
        self.tipo = tipo
        self.nombre = nombre
        self.pvp = pvp
        self.descripcion = descripcion
        self.productor = productor
        self.dsitribuidor = dsitribuidor
        self.isbn = isbmn
        self.autor = autor
    
adorno = Producto('000A','ADORNO','Vaso Adornado',15,'Vaso de porcelana con dibujtos')
print(adorno.tipo)

