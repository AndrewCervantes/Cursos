# Sentencia IF.- Permite dividir el flujo de un programa en diferentes caminos.
if True:
    print("Se cumple la condición")

print("Ejemplo de paridad")
n = int(input("Ingrese un valor:"))
if (n % 2 == 0):
    print(n," Es un número par")
else:
    print(n, "Es un número impar")

print("Ejemplo de calificaciones")
nota = float(input("Introduce una calificación: "))
if nota >= 9:
    print("Sobresailiente")
elif nota >= 7:
    print("Notable")
elif nota >= 5:
    print("Suficiente")
else:
    print("Insuficiente")