var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        // Incrementa la població cada vegada que es crea un nou animal
        Animal.population++;
    }
    Animal.population = 0;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(color) {
        var _this = _super.call(this) || this; // Crida al constructor de la classe pare (Animal)
        _this.color = color; // Assigna el color al gos
        return _this;
    }
    // Implementació del mètode abstracte sound per Dog
    Dog.prototype.sound = function () {
        console.log("WOW");
    };
    // Mètode específic per Dog
    Dog.prototype.iamadog = function () {
        console.log('yes, this is a dog');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(gender) {
        var _this = _super.call(this) || this; // Crida al constructor de la classe pare (Animal)
        _this.gender = gender; // Assigna el gènere al gat
        return _this;
    }
    // Implementació del mètode abstracte sound per Cat
    Cat.prototype.sound = function () {
        console.log("MEOW");
    };
    // Mètode específic per Cat
    Cat.prototype.iamacat = function () {
        console.log('yes, this is a cat');
    };
    return Cat;
}(Animal));
var animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    // Crida al mètode sound() per fer que l'animal faci el seu so
    animal.sound();
    // Comprova el tipus de l'animal per cridar el mètode específic
    if (animal instanceof Cat) {
        animal.iamacat();
    }
    else if (animal instanceof Dog) {
        animal.iamadog();
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
