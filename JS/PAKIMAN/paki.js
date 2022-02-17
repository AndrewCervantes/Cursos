//Array con valores asociativos
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*
El array con valores asociativos funciona igual que un JSON.
var imagenes = {
    Cauchin: "vaca.png",
    Pokacho: "pollo.png"
    Tocinauro = "cerdo.png"
}
*/ 

/*Objeto . instancia de una clase
var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
*/

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//Mostrar todos los pakimanes atrapados
//El in itera sobre el indice.
//El of itera sobre el objeto.
for (var p of coleccion) {
    p.mostrar();
}




