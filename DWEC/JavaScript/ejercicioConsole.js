// 1. Crea un función que utilice error correctamente
function Error(message) {
    console.error("Error: " + message);
}
Error("Este mensaje es de error.");

// 2. Crea una función que utilice warn correctamente
function Warn(mensaje) {
    console.warn("Esto es una advertencia: " + mensaje)
}
Warn(" Esto es una advertencia");


// 3. Crea una función que utilice info correctamente
function info(mensaje){
    console.info("Informacion: " + mensaje);
}
info("Esto es informacion");

// 4. Utiliza table
tabla = [
    {nombre: "Juan Antonio", edad:42, profesion:"Desarrollador"},
    {nombre: "Mcfly", edad:21,profesion:"Mamporrero"},
    {nombre:"Aritz", edad:30, profesion:"Diseñador"}
]
console.table(tabla);

// 5. Utiliza group
console.group("Clase")
console.log("Nombre: Juan Antonio")
console.log("Edad: 42")
console.groupEnd

// 6. Utiliza time
console.time("Ejecutandose")
for (let index = 0; index < 100000000; index++) {
}
console.timeEnd("Ejecutandose")

// 7. Valida con assert si un número es positivo
let num = -4
console.assert(num > 0, "El numero no es positivo")


// 8. Utiliza count
console.count("letra")
console.count("letra")
console.count("letra1")
console.count("letra3")
console.countReset("letra")
console.count("letra")

// 9. Utiliza trace


// 10. Utiliza clear
function limpiarConsola() {
    console.clear
}
limpiarConsola();