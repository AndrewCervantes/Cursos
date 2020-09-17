package HelloWorld;
/**
 * @author Christian Andres Cervantes Moreno
 */
/**Mi clase en Java
Public -> Clase de manera publica
Class -> palabra reservada.
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
        System.out.println("Valor Entero: "+numEntero);
        
        numEntero = 15;
        System.out.println("Valor Entero Modificado: "+numEntero);
        
        //Tipo String 
        String cadena = "Saludos";
        System.out.println(cadena);
        
        cadena ="Adios";
        System.out.println(cadena);
        
        //Tipo var .- Inferencia de tipos en Java
        //var varEntero = 15;
        //System.out.println(varEntero);
        
        
    }
    
}
