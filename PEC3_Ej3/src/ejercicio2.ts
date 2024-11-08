// Defineix la interfície per als avions
interface Plane{
    model:string,
    npassengers:number
}

// Defineix el tipus HangarHash, que és un objecte on les claus són cadenes i els valors són de tipus Plane
interface HangarHash {
    [key: string]: Plane;
}

// Crea un hangar buit
let myHangar:HangarHash = {};

// Afegeix avions a l'hangar
myHangar['123Z']={
    model:'airbus',
    npassengers:200
};
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
};

// Recorre l'objecte myHangar per imprimir la informació de cada avió en el format especificat
for (let key in myHangar) {
    const plane = myHangar[key];
    console.log(`${key}:${plane.model}(${plane.npassengers})`);
}
