
let operacion = parseInt(prompt("¿Qué operación quieres realizar?\n 1-suma,\n 2-resta,\n 3-multiplica,\n 4-divide"));
let resultado;
let num1;
let num2;

do {
    num1 = parseFloat(prompt("Dime el primer número: "));
    if (isNaN(num1)) {
        alert("Eso no es un número");
    }
} while (isNaN(num1));

do {
    num2 = parseFloat(prompt("Dime el segundo número: "));
    if (isNaN(num2)) {
        alert("Eso no es un número");
    }
} while (isNaN(num2));

switch (operacion) {
    case 1:
        resultado = num1 + num2;
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        alert(`El resultado de la resta es: ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        alert(`El resultado de la multiplicación es: ${resultado}`);
    case 4:
        if (num2 === 0) {
            alert("No se puede dividir entre 0");
        } else {
            resultado = num1 / num2;
            alert(`El resultado de la división es: ${resultado}`);
        }
        break;
    default:
        alert("Operación no válida");
        break;
}