package ClaseScanner;

/**
 *
 * @author Andrez
 */
import java.util.*;
public class Scanner {
    public static void main(String[] args) {
        
        System.out.println("Ingresa un nombre: ");
        Scanner consola = new Scanner(System.in);
        String usuario = consola.nextLine();
        System.out.println("Usuario = " +usuario);
    }
    
}
