/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package evaluacion;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 *
 * @author Andrez
 */
public class Evaluacion {

    /**
     * @param args the command line arguments
     */
    
    public static void main(String[] args) throws IOException{
        try {
            //
            FileInputStream f = new FileInputStream("Mapeo Colaborativo datos.gob.mx __ bit.ly_rescateMX.xlsx");
            //Clase de excel
            XSSFWorkbook libro = new XSSFWorkbook(f);
            
            //Obteniendo hoja
            XSSFSheet hoja = libro.getSheet("Centros de Acopio - Colaborativ");
            
            //Obtener todas las filas.
            Iterator<Row> filas = hoja.iterator();
            Iterator<Cell> celdas;
            
            //Reccorrer las filas.
            Row fila;
            Cell celda;
            
            while(filas.hasNext()){
                fila = filas.next();
                celdas = fila.cellIterator();
                
                //Recorrer las celdas
                while(celdas.hasNext()){
                    celda = celdas.next(); 
                    

                }
            }
            System.out.println();
            libro.close();

        
        } catch (FileNotFoundException ex) {
            Logger.getLogger(Evaluacion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
