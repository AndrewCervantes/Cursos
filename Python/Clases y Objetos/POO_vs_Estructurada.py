clientes =[
    {'Nombre':'Christian Andres', 'Apellido':'Cervantes Moreno', 'dni':'111A'},
    {'Nombre':'Gabriela', 'Apellido':'Martinez Juarez', 'dni':'222B'}
]

#print(clientes)

# Consultar Clientes por dni

def mostrar(clientes,dni):
    for c in clientes:
        if dni == c['dni']:
            print('{} {}'.format(c['Nombre'],c['Apellido']))
            return
    print("El cliente no se encontro")

mostrar(clientes,'111A')


# Eliminar cliente por dni

def borrar(cliente,dni):
    for i,c in enumerate(clientes):
        if (dni == c['dni']):
            del(clientes[i])
            print(str(c)," Eliminado")
            return
    print("El cliente no encontrado")

print()
borrar(clientes,'222B')

print(clientes)



#codigo en clases
# Creo una estructura para los clientes
class Cliente:

    def __init__(self, dni, nombre, apellidos):
        self.dni = dni
        self.nombre = nombre
        self.apellidos = apellidos

    def __str__(self):
        return '{} {}'.format(self.nombre,self.apellidos)

# Y otra para las empresas
class Empresa:

    def __init__(self, clientes=[]):
        self.clientes = clientes

    def mostrar_cliente(self, dni=None):
        for c in self.clientes:
            if c.dni == dni:
                print(c)
                return
        print("Cliente no encontrado")

    def borrar_cliente(self, dni=None):
        for i,c in enumerate(self.clientes):
            if c.dni == dni:
                del(self.clientes[i])
                print(str(c),"> BORRADO")
                return
        print("Cliente no encontrado")

### Ahora utilizaré ambas estructuras 
