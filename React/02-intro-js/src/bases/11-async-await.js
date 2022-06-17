/* Async - Await
El async nos sirve para retornar una función como promesa.
El await nos sirve para poder trabajar todo el código como si fuera sincrono y funciona dentro de async
*/

/* Promeesa de codigo largo
const getImagenPromesa = () => {
    const promesa = new Promise ( (resolve, reject) =>{
        resolve('https://dknndkndwk.com')
    })
    return promesa;
}
*/

/* Promesa simplificada pero un poco complicada de comprender */
const getImagenPromesa = () => new Promise ( resolve =>  resolve('https://dknndkndwk.com'));
getImagenPromesa().then(console.log);


/* Forma de simplificarlo con async
const getImage = async() => {
    return 'https://dknndkndwkjjj.com';
}
getImage().then(console.log);

*/


const getImage = async() => {
    try {
        const apiKey = '7NsSOdhbIZzlW21VgUpCGbHfjUmhzqNM';
        const respuesta =  await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const {data} = await respuesta.json();
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}
getImage()

