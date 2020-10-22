#Funciones Recursivas
def cuenta_atras(num):
    num -= 1
    if num > 0:
        print(num)
        cuenta_atras(num)
    else:
        print("Booom!")
    print("Fin de la funcion", num)

cuenta_atras(10)



#Funcion del factorial
def factorial(num):
    print("Valor inicial : ",num)
    if num > 1:
        num = num * factorial(num -1)
    print("Valor final : ", num)
    return num

print("El factorial de 5 es",factorial(5))