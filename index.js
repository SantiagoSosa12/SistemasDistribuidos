
var lista = ["Primera Linea"];

const readline = require("readline"),
    fs = require("fs"),
    NOMBRE_ARCHIVO = "/home/serverone/serverStatus/logger.txt";

let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
});

lector.on("line", linea => {
    console.log(linea);
    lista.push(linea);
});

console.log(lista[lista.length - 1] + " Ultima linea");
