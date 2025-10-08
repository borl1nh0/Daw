/*Ejercicio 1*/
let nombre = "Antonio"


if (nombre=="Juan"){
    console.log("Buenos dias Juan")
}else{
    console.log("No eres Juan")
}

/*Ejercicio 2*/
let usuario = "Juan"
let pass = "1234"

let user = "Juan"
let pass1 = "0123"

if (usuario === user && pass === pass1){
    console.log("Welcome")
}else{
    console.log("Denegado")
}

/*Ejercicio 3*/
let num = "-1"
if (num<0){
    console.log("Es negativo")

}else if (num==0){
    console.log("Es cero")

}else {
    console.log("Es positivo")
}

/*Ejercicio 4*/

let edad = "18"

if (edad >= 18){
    console.log("Puedes votar")
}else{
    console.log("No puedes votar")
}

/*Ejercicio 5*/
let edad1 ="18"

edad1 = edad1 >=18 ? "eres mayor" : "No eres mayor"
console.log(edad1)

/*Ejercicio 6*/

let mes = "8"

if (mes == 12 || mes == 1 || mes == 2){
    console.log("Es invierno")
}else if (mes >=3 && mes <=5){
    console.log("Primavera")
}else if (mes >=6 && mes <=8){
    console.log("Verano")
}else if(mes >= 9 && mes <= 11 ){
    console.log("Otoño")
}else{
    console.log("Mes no valido")
}
/*Ejercicio 7*/

let mes0 = "agosto"

if (mes0 == "enero" || mes0 == "marzo" || mes0== "mayo" || mes0 == "julio" || mes0 == "agosto" || mes0== "octubre" || mes0 == "diciembre"){
    console.log(mes0+" tiene 31 dias")
}else if (mes0=="febrero" || mes0=="abril" || mes0=="junio" || mes0 == "septiembre" || mes0 == "noviembre"){
    console.log(mes0+ "No tiene 31 dias")
}

/*Ejercicio 8*/
let idioma = "es"; // Puede ser "es", "en", "fr", "de"

switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no reconocido");
}


/*Ejercicio 9*/
let mes1 = "Diciembre"
switch (mes1) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en Invierno");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Estamos en Primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Estamos en Verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Estamos en Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}
    


