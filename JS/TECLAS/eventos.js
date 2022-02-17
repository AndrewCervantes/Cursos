//Coleccion de variables es un bloque de código  - JSON(JavaScrip Object Notation)
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};


document.addEventListener("keyup",dibujarTeclado); 
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);


function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento){ //La variable evento se va a llenar de datos y estarán todos los detalles de como ocurre el evento.
    //console.log("tecla oprimida");
    //console.log(evento.keyCode);//keycode es una propiedad de keyup.
    var colorcito = "blue";
    var movimiento = 10;


    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGTH:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("Another key");
        break;
    }
}
