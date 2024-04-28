const prompt = require('prompt-sync')({ sigint: true });

const x = prompt('Masukan nilai: ');
var squareRoot = Math.sqrt(x);

if (x < 0) {
    console.log("Tidak bisa input bilangan negatif")
} else if (!isNaN(x) && x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil")
} else {
    console.log("Square root of", x, "is", squareRoot)
}