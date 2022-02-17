
var t = document.getElementById("textito"); // Obtiene el elemento por id.
var b = document.getElementById("botoncito");
b.addEventListener("click",dibujoPorClick);  // Attach a click event to the document

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var colorcito = "#FAA";



dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);



dibujarLinea(colorcito, 299,299,299,1);
dibujarLinea(colorcito, 299,1,1,1);



function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(t.value);
    var l = 0;
    var yi, xf, yf, xi, nfx,nfy;
    var espacio = ancho / lineas;


    for (l =0; l < lineas; l++) {
        xi = espacio * l;
        xf = espacio * l;
        yi = espacio * (l+1);
        yf = espacio * (l+1);
        nfx = 300 - xf;
        nfy =  300 - yf;
        dibujarLinea(colorcito, xi,300,300, nfy);
        dibujarLinea(colorcito, 0,xf,nfx,0);
        dibujarLinea(colorcito, 0,xf,yi,300);
        dibujarLinea(colorcito,xi,0,300,yf);    
        
    }

}