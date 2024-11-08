// Crea un hangar buit
var myHangar = {};
// Afegeix avions a l'hangar
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
// Recorre l'objecte myHangar per imprimir la informació de cada avió en el format especificat
for (var key in myHangar) {
    var plane = myHangar[key];
    console.log("".concat(key, ":").concat(plane.model, "(").concat(plane.npassengers, ")"));
}
