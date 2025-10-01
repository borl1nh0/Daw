
let sumaTotal = 0;
let contador = 0;
let cantidad;
do {
    pedirNumeros();
} while (isNaN(cantidad) || cantidad <= 0);
contador = 0;
for (let i = 0; i < cantidad; i++) {
    let num;
    do {
        num = parseFloat(prompt(`Dime el número ${i + 1}: `));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("CAPULLO PON UN NUMERO");
            }
        }
    } while (isNaN(num));
    sumaTotal += num;
}
alert("La suma total de los números es: " + sumaTotal);
l

function pedirNumeros() {
    cantidad = parseInt(prompt("¿Cuántos números vas a introducir?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Introduce un número válido mayor que 0");
        contador++;
        if (contador >= 3) {
            alert("CAPULLO PON UN NUMERO");
        }
    }
}

