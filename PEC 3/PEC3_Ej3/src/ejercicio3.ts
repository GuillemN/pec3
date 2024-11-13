abstract class Animal {
    static population: number = 0;

    constructor() {
        // Incrementa la població cada vegada que es crea un nou animal
        Animal.population++;
    }

    // Mètode abstracte per definir el so de l'animal
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;

    constructor(color: string) {
        super(); // Crida al constructor de la classe pare (Animal)
        this.color = color; // Assigna el color al gos
    }

    // Implementació del mètode abstracte sound per Dog
    public sound(): void {
        console.log("WOW");
    }

    // Mètode específic per Dog
    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;

    constructor(gender: string) {
        super(); // Crida al constructor de la classe pare (Animal)
        this.gender = gender; // Assigna el gènere al gat
    }

    // Implementació del mètode abstracte sound per Cat
    public sound(): void {
        console.log("MEOW");
    }

    // Mètode específic per Cat
    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    // Crida al mètode sound() per fer que l'animal faci el seu so
    animal.sound();

    // Comprova el tipus de l'animal per cridar el mètode específic
    if (animal instanceof Cat) {
        (animal as Cat).iamacat();
    } else if (animal instanceof Dog) {
        (animal as Dog).iamadog();
    }
}

/** El bucle imprimeix les línies següents:
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); // 4
