# +++++++++++++++++ ENVIO DE VALORES +++++++++++++++++++++++

def suma(a,b):
    return a + b

resultado = suma(10,15)
print("La suma es", resultado)


def resta(a,b):
    return a - b

r = resta(a = 5,b = 3)
print("La resta es ", r)


#Argumentos por valor y referencia
#Los tipos de datos simples se pasan como argumentos.
def doblar_valor(numero):
    numero *=2
n = 10
print(n)
#Datos simples que pasen como referencia
def ref (num):
    return num * 2
a = 10
a = ref(a)
print("TDS como referencia ", a)


#Los valores de las listas se pasan por referencia 

def doblar_valores (numeros):
    for i,v in enumerate(numeros):
        numeros[i] *= 2

ns = [10,50,100]
doblar_valores(ns)
print("Los valores de la lista son: ", ns)

#Valores de colecciones que pasen por argumento
def arg(nu):
    for b,m in enumerate(nu):
        nu[b] *=2
nw = [10,50,100]
arg(nw[:])
print("TDC en argumento ",nw)