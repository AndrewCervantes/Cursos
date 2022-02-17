//Crear una clase
class Pakiman{
    //Constructor
    constructor(n, v, a){
        //Atributos
        // This. Es un indicador de la intancia en donde estoy.
        this.imagen = new Image(); //Objeto de imagenes
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    //Metodo
    hablar(){
        alert(this.nombre);
    }

    mostrar(){
        //Agregar un hijo al arbol
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+ this.nombre + "</strong><br/>");
        document.write("Vida: "+ this.vida + "<br/>");
        document.write("Ataque: "+ this.ataque + "<br/>");
        document.write("</strong>");
    }
}