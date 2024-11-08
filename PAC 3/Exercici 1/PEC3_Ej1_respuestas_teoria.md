# PEC3_Ej1 - Principals Avantatges de TypeScript sobre JavaScript

## 1. Tipat Estàtic
TypeScript permet assignar tipus a variables, funcions i objectes, cosa que facilita la detecció d'errors en la fase de compilació abans que el codi s'executi. Això ajuda a evitar errors en temps d'execució i fa el codi més segur.

## 2. Definició d'Interfícies i Tipus
TypeScript permet definir interfícies i tipus personalitzats, com en l'exemple de la interfície `Dog`. Això facilita la lectura i el manteniment del codi perquè s'entenen millor les estructures de dades utilitzades.

## 3. Millor Autocompletat i Eines de Desenvolupament
La tipificació de TypeScript ofereix millor suport per a l'autocompletat i les eines de desenvolupament, cosa que redueix els errors i millora la productivitat. Quan declarem `dog: Dog`, l'editor ens suggereix propietats correctes com `kind` i `weight`.

## 4. Validació i Coherència de Funcions
TypeScript permet definir els tipus d'entrada i de retorn de les funcions. En l'exemple, `baby(dog1: Dog, dog2: Dog): Dog` garanteix que la funció treballarà només amb objectes `Dog` i retornarà un altre objecte `Dog`, proporcionant més seguretat.


TypeScript aporta una major seguretat, claredat i eficiència al desenvolupament JavaScript. És especialment útil en projectes de gran escala o amb molta complexitat, ja que facilita el manteniment i redueix la probabilitat d'errors en temps d'execució.
