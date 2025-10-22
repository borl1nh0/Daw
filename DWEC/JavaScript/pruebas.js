/*saber la letra de un dni
function letraDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras.charAt(dni % 23);
}
console.log(letraDNI(99999999)); */


/*saber si el dni es correcto*/
function dniCorrecto(dniCompleto) {
    const dni = parseInt(dniCompleto.slice(0, -1));
    const letra = dniCompleto.slice(-1).toUpperCase();
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraCorrecta = letras.charAt(dni % 23);
    return letra === letraCorrecta;
}
console.log(dniCorrecto("99999999D"));

/*validar dni en formato flecha*/
const dniCorrectoFlecha = (dniCompleto) => { 
    const dni = parseInt(dniCompleto.slice(0, -1));
    const letra = dniCompleto.slice(-1).toUpperCase();
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraCorrecta = letras.charAt(dni % 23);
    return letra === letraCorrecta;
}