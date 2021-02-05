
package operadores_en_java;

import java.util.Scanner;


public class Operadores_en_Java {


    public static void main(String[] args) {
        

        //Operadores Aritmeticos
        int a = 3, b = 2;
        
        //Suma
        int resultado = a + b;
        System.out.println("El resultado de la suma es: "+ resultado);
        
        //Resta
        resultado = a - b;
        System.out.println("El resultado de la resta es: "+resultado);
        
        //División
        float resultado2 = (float)a / (float)b;
        System.out.println("El resultado de la división es: "+resultado2);
        
        //Multiplicación
        resultado = a * b;
        System.out.println("El resultado de la multiplicaci{on es: " + resultado);
        
        //Modulo (residuo)
        resultado = a%b;
        System.out.println("El resultado del residuo de la división es: " + resultado);
        
        Scanner dato = new Scanner(System.in);
        System.out.println("Ingresa un número");
        int numero = Integer.parseInt(dato.nextLine());
        if (numero %2 == 0){
            System.out.println("El número "+numero+" es par.");
        }
        else{
            System.out.println("El número "+numero+" es impar.");
        }
        
        //Ejercicio de rectangulo
        /*
        System.out.println("Ingresa el ancho: ");
        int ancho = Integer.parseInt(dato.nextLine());
        System.out.println("Ingresa la altura: ");
        int altura = Integer.parseInt(dato.nextLine());
        int area = ancho * altura;
        int perimetro = (ancho+altura)*2;
        System.out.println("El area del rectangulo es: "+ area);
        System.out.println("El perimetro del rectangulo es: "+ perimetro);
        */
        
        
        //Operadores de Asignaci{on
        int c = a + 5 - b;
        System.out.println("El resultado de c es: "+ c);
        
        //Incremento
        a += 1; //a = a + 1
        System.out.println("a: " + a);
       
        a += 3; //a = a + 3
        System.out.println("a: " + a);
        
        a -= 2; // a = a -2
        System.out.println("a: "+a);
    }
    
}
