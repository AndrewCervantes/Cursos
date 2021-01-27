package HelloWorld;

import java.util.Scanner;

/**
 * @author Christian Andres Cervantes Moreno
 */
/**
 * Mi clase en Java Public -> Clase de manera publica Class -> palabra
 * reservada.
 */
public class HelloWorld {

    /*
    //Metodo main
    public static void main(String[] args) {
        //Imprimir en la consola
        System.out.println("Hello world");
    }
     */
    public static void main(String[] args) {
        //Tipo Entero
        int numEntero = 10;
        System.out.println("Valor Entero: " + numEntero);

        numEntero = 15;
        System.out.println("Valor Entero Modificado: " + numEntero);

        //Tipo String 
        String cadena = "Saludos";
        System.out.println(cadena);

        cadena = "Adios";
        System.out.println(cadena);

        //Concatenar cadenas
        String usuario = "Christian";
        String titulo = "Ingeniero";
        String union = titulo + " " + usuario;
        System.out.println("Union = " + union);
        
        int i = 3;
        int j = 4;
        System.out.println(i + j);// Se realiza la suma de nuemeros
        System.out.println(i + j + usuario);//Evalucion de left to rigth suma
        System.out.println(usuario+i+j); //Se realiza una concatenacion (Contexto cadena[left - right])
        System.out.println(usuario + (i+j));//Uso de parentesis modifican la prioridad.
        
        //Ejercicios
        String nombre = "Andrew";
        //Salto de linea
        System.out.println("Nueva linea: \n" + nombre);
        //Tabulador
        System.out.println("Tabulador: \t"+nombre);
        //Retroseso
        System.out.println("Retroceso: \b"+nombre);
        //Comilla simple
        System.out.println("Comilla Simple: \'"+nombre+"'");
        //Comilla Doble
        System.out.println("Comillas Dobles: \" "+nombre+" \"");
        
        
        /*
        System.out.println("Escribe tu nombre: ");
        Scanner consola = new Scanner(System.in);
        String usuario2 = consola.nextLine();
        System.out.println("Usuario: "+ usuario2);
        System.out.println("Escribe el titulo: ");
        String titulo2 = consola.nextLine();
        System.out.println("Resultado: " + titulo2 + " " + usuario);
        */
        
        /*Tipos primitivos enteros: byte, short, int, long
        byte = 8 bits
        short = 16 bits
        int = 32 bits
        long = 64 bits     
        */
        
        //BYTE 
        byte numeroByte = (byte) 129;
        System.out.println("Valor minimo byte: "+ Byte.MIN_VALUE);
        System.out.println("Valor maximo byte: "+ Byte.MAX_VALUE);
        
        //SHORT
        short numeroShort = (short)32768;
        System.out.println("numeroShort: " + numeroShort);
        System.out.println("Valor minimo short: "+ Short.MIN_VALUE);
        System.out.println("Valor maximo short: "+ Short.MAX_VALUE);
        
        // INT
        int numeroInt = (int)2147483648L; //literal de timpo long
        System.out.println("nuemorInt: "+ numeroInt);
        System.out.println("Valor minimo int: " + Integer.MIN_VALUE);
        System.out.println("Valor maximo int: " + Integer.MAX_VALUE);
        
        //LONG
        long numeroLong = 10;
        System.out.println("numeroLong: "+ numeroLong);
        System.out.println("Valor minimo long: " + Long.MIN_VALUE);
        System.out.println("Valor maximo long: " + Long.MAX_VALUE);
        
        /*Tipos primitivos float: float y doble
        */
        
        
        //FLOAT
        float numeroFloat = (float)10.0; //Tipo flotante
        System.out.println("numeroFloat: "+ numeroFloat);
        System.out.println("Valor minimo Float: "+ Float.MIN_VALUE);
        System.out.println("Valor maximo FLoat: "+ Float.MAX_VALUE);
        
        //DOUBLE
        double numeroDouble = 10;
        System.out.println("numeroDouble: "+ numeroDouble);
        System.out.println("Valor minimo Double: "+ Double.MIN_VALUE);
        System.out.println("Valor maximo Double: "+ Double.MAX_VALUE);
       
        //CHAR 
        char caracter = 'a';
        System.out.println("Mi caracter es: "+ caracter);
        
        //código unicode
        char varChar = '\u0021';
        System.out.println("varchar: "+ varChar);
        
        char varCharDecimal = 33;
        System.out.println("varCharDecimal: " + varCharDecimal);
        
        char varCharSimbolo = '!';
        System.out.println("varCharSimbolo: "+ varCharSimbolo);
        
        //BOOLEAN
        boolean varBoolean = false;
        System.out.println("vaBoolean: "+varBoolean);
        
        if (varBoolean){
            System.out.println("La bandera es verdadera");
        }
        else{
            System.out.println("La bandera es falsa");
        }
        
        //Ejemplo de edad
        int edad = 15;
        boolean adulto = edad >=18;
        if(adulto){
           System.out.println("Eres mayor de edad");
        }
        else{
           System.out.println("Eres menor de edad");
        }
        
        
        //CONVERSIÓN DE TIPOS PRIMITIVOS
        
        // Convertir String --> Int
        String convertir = "20";
        int convertir_Entero = Integer.parseInt(convertir);
        System.out.println("convertir_Entero: "+(convertir_Entero + 10));
        
        //Ejercicio
        Scanner consola = new Scanner (System.in);
        System.out.println("Ingresa tu edad: ");
        convertir_Entero = Integer.parseInt(consola.nextLine());
        System.out.println("convertir = " + convertir_Entero);
        
        
  
    }

}
