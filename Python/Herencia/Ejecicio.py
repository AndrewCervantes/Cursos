#Ejercicio 1
class Vehículo():

    def __init__(self,color,ruedas):
        self.color = color
        self.ruedas = ruedas

    def __str__(self):
        return """
            Color {},
            {} Ruedas
        """.format(self.color, self.ruedas)

class Coche(Vehículo):

    def __init__(self, color, ruedas, velocidad, cilindrada):
        Vehículo.__init__(self, color, ruedas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada

    def __str__(self):
        return Vehículo.__str__(self) + """, 
            {} km ,
            {} cc
        """.format(self.color, self.ruedas, self.velocidad, self.cilindrada)

coche = Coche("Azul", 4, 150, 1200)

print(coche)