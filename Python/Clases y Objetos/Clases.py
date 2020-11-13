###########  CLASE  ###########
#Una clase es un molde para crear objetos
class Galleta:
    pass

###########  OBJETO  ###########
#Objeto es la instancia de una clase
#Creación de un objeto
una_galleta = Galleta()
otra_galleta = Galleta()



#el metodo type nos retorna el tipo de dato.
print(type(una_galleta))

###########  ATRIBUTO  ###########
#Atributo son las caractericas(variables) dentro de  una clase.
#Atributo dinámico.- Son aquellos que se crean dinamicamente en los objetos
oreo = Galleta()
#Se crea atributo "sabor" dinamicamente.
oreo.sabor = "Choocolate"
#Se crea atributo "color" dinamicamente.
oreo.color = "Café"

print("El sabor de esta galleta es",oreo.sabor)


###########  EJEMPLO  ###########
class Futbol:
    portero = False
f = Futbol()
print(f.portero)
f.portero = True
print(f.portero)
if f.portero:
    print("El equipo de futbol tiene portero")
else:
    print("El equipo de futbol no tiene porteno")



