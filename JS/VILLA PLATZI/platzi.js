var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");



//Crar un JSON del fondo
var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
}


//Objeto Imagen o instancia de la clase imagen.
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
//Evento para cargar la imagen
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
//Evento para cargar la imagen
vaca.imagen.addEventListener("load", cargaVaca);


function cargaFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargaVaca(){
    vaca.cargaOK = true;
    dibujar();
}






function dibujar(){
    //a nuestro lienzo se le agrega la imagen y la posicion en x,y
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOK){
        for (var i = 0; i < 10; i++) {
            var x = aleatorio(0,420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen,x,y);   
        }
    }
}


function aleatorio (min, max){
    var resultado ;
    // Math.floor redondea el valor down. Math.ceil redondea el valor up.
    // Math.random siempre viene de 0.0000 a 0.99999
    resultado = Math.floor(Math.random() * (max - min + 1)) + min ;
    return resultado;
}