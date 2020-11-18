#Encapsulación
class Ejemplo:
    #atributo privado
    __atributo_privado = "Soy un atributo inalcanzable desde fuera"

    #metodo privado
    def __metodo_privado(self):
        print("Soy un metodo inalcanzable esde fuera")

    #Convertir un atributo privado en publico
    def atributo_publico(self):
        return self.__atributo_privado
    
    #Convertir un meotod privado en publico
    def metodo_publico(self):
        return self.__metodo_privado()

#creacion de objeto
e = Ejemplo()
#e.__atributo_privado
#e.__metodo_privado()
print(e.atributo_publico())
print(e.metodo_publico())