let nombre = "Alberto";
let nacionalidad = " Salvadoreño";

//oncatenacion
console.log("Bienvenido " + nombre + "  De nacionalidad" + nacionalidad);//forma 1

console.log(`Bienvenido',nombre, 'de nacionalidad', nacionalidad)//forma2

console.log("Bienvenido ${nombre} de nacionalidad ${nacionalidad}`);//forma 3

// length
console.log(`la variable tiene: ${ nombre.length } caracteres`);

//touppercase 
console.log(nombre.toUpperCase());

//tolowercase
console.log(nombre.toLowerCase());

// Slice 
console.log(nombre.slice(0,3));

let texto = "Hola desde JS";
console.log(texto.split(" ")