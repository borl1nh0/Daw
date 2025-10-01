// Comprobador de palíndromos sencillo

let palabra = prompt("Introduce una palabra:")
function esPalindromo(str) {
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}

if (esPalindromo(palabra)) {
    alert("Es un palíndromo")
} else {
    alert("No es un palíndromo")
}