function printArray(array) {
    // Codi per imprimir l'array a la consola
    console.log(array.join(","));
}
var array = [2, 3, 4];
console.log(array[0]); //  Mostra l'element de l'array --> 2
array.shift();
printArray(array); //  Mostra l'element de l'array --> 3,4
array.push(5);
printArray(array); //  Mostra l'element de l'array --> 3,4,5
console.log(array[array.length - 1]); // Mostra l'últim element de l'array --> 5
array.pop();
printArray(array); // Mostra --> 3,4
array.push(1);
printArray(array); // Afegeix un element al final de l'array i mostra --> 3,4,1
array.unshift(8);
printArray(array); // Afegeix un element al principi de l'array i mostra --> 8,3,4,1
var everyisgreater = array.every(function (num) { return num > 3; });
console.log(everyisgreater); // Comprova si tots els elements són més grans que 3 per tant false ja que hi ha un 1
var everyisless = array.every(function (num) { return num < 10; });
console.log(everyisless); //  // Comprova si tots els elements són més petit que 10 per tant true 
// Ordena l'array en ordre ascendent i mostra'l com a cadena
console.log(array.sort(function (a, b) { return a - b; }).join(",")); // 1,3,4,8
// Ordena l'array en ordre descendent i mostra'l com a cadena
console.log(array.sort(function (a, b) { return b - a; }).join(",")); // 8,4,3,1
