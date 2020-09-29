package HelloWorld;

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
        
    }

}
