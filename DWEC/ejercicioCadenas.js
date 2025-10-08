/* Ejercicio 1*/
let palabra1 = "Buenos"
let palabra2 = " dias"

console.log(palabra1+palabra2)

/* ejercicio 2*/
let contar = "palabra"
console.log(contar.length)

/*Ejercicio 3*/
let muestra = "palabr3"
console.log(muestra.slice(muestra.length -1))

console.log(muestra.slice(0,1)+ muestra.slice(-1))

/*Ejercicio 4*/

let frase = "Buenos dias"
console.log(frase.toLowerCase())

console.log(frase.toUpperCase())

/*Ejercicio 5*/

let varias =`hola
buenos 
dias`

console.log(varias)

/*Ejercicio 6*/

let nombre = "Juan"
let edad = "42"

console.log(`Me llamo ${nombre}, y tengo ${edad} años`)

/*Ejercicio 7*/
let frase1 = "Hola buenos dias, como estais"

console.log(frase1.replaceAll(" ","-"))

/*Ejercicio 8*/
let frase2 = " Josemi esta muy pesao"

console.log(frase2.includes("a"))

/*Ejercicio 9*/
let comprueba = "Hola"
let comprueba1 = "Hola"

console.log(comprueba == comprueba1)

/*Ejercicio 10*/
let str1 = "Cara papa"
let str2 = "cara papa"

if (str1.length === str2.length) {
    console.log("Son iguales")
}else{
    console.log("no son iguales")
}