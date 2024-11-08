function printArray(array:Array<number>):void{
  // Codi per imprimir l'array a la consola
  console.log(array.join(","));
}

let array:number[]=[2,3,4];


console.log(array[0]); //  Mostra l'element de l'array --> 2


array.shift();
printArray(array);  //  Mostra l'element de l'array --> 3,4


array.push(5);
printArray(array); //  Mostra l'element de l'array --> 3,4,5


console.log(array[array.length - 1]); // Mostra l'últim element de l'array --> 5


array.pop();
printArray(array); // Mostra --> 3,4


array.push(1);
printArray(array); // Afegeix un element al final de l'array i mostra --> 3,4,1


array.unshift(8);
printArray(array); // Afegeix un element al principi de l'array i mostra --> 8,3,4,1


let everyisgreater = array.every(num => num > 3);
console.log(everyisgreater);  // Comprova si tots els elements són més grans que 3 per tant false ja que hi ha un 1

let everyisless = array.every(num => num < 10);
console.log(everyisless);  //  // Comprova si tots els elements són més petit que 10 per tant true 


console.log(array.sort((a, b) => a - b).join(",")); // Ordena l'array en ordre ascendent i mostra'l com a cadena --> 1,3,4,8


console.log(array.sort((a, b) => b - a).join(",")); // Ordena l'array en ordre descendent i mostra'l com a cadena --> 8,4,3,1
