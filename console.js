//METODOS BÁSICOS DE SALIDA

console.log("Hola Mundo");

console.info("Console.info(): Similar a .log() pero para mostrar información");

console.warn("Console.warm(): Para advertencias");

console.error("Console.error(): Para Errores");

//TABLAS

const usuarios = [
  { nombre: "Juan", edad: 25, rol: "Desarrollador" },
  { nombre: "María", edad: 30, rol: "Diseñadora" },
  { nombre: "Carlos", edad: 28, rol: "Product Manager" }
];

console.log(usuarios);
console.table(usuarios);
console.table(usuarios, ["nombre", "rol"]);

//TIEMPO

console.time("Operación");
for (let i = 0; i < 1000000; i++) {
  // Operación que consume tiempo
}

console.timeEnd("Operación");


//COUNT

console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.countReset("contador");
console.count("contador");


//AGRUPACIÓN

console.group("Grupo Principal");
console.log("Información 1");
console.group("Subgrupo");
console.log("Información subgrupo 1");
console.groupEnd();
console.group("Subgrupo 2");
console.log("Información subgrupo 2");
console.groupEnd();
console.log("Final");
console.groupEnd();


//AFIRMACIONES

console.assert(1 === 1, "Esto no se muestra");
console.assert(1 === 2, "Esto si se mostrará");


//CLEAR

//console.clear();

console.trace("Mostrar la pila de llamadas actual");