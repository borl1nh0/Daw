
function calcularArea() {
let r = prompt("Introduce el radio de la esfera:");
let area = 4 * Math.PI * r * r;
let volumen = (4 / 3) * Math.PI * r * r * r;

console.log("Área = " + area);
console.log("Volumen = " + volumen);
}

function valorAbsoluto() {
    let numero = prompt("Introduce un número:");
    let valorAbsoluto = Math.abs(numero);
    alert("El valor absoluto es: " + valorAbsoluto);
}

function calcularInverso() {
    let numero = prompt("Introduce un número:");
    let inverso = 1 / numero;
    console.log("El inverso de " + numero + " es " + inverso);
}

function saberTiempo() {
    let hora = parseInt(prompt("Introduce la hora (0–23):"));
    let minuto = parseInt(prompt("Introduce los minutos (0–59):"));

    let totalMinutos = hora * 60 + minuto;

    let inicioDia = 7 * 60 + 30;   // 07:30
    let finDia = 14 * 60;          // 14:00
    let inicioTarde = 14 * 60 + 1; // 14:01
    let finTarde = 20 * 60 + 30;   // 20:30

    if (isNaN(hora) || isNaN(minuto) || hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
    alert("Error: hora o minutos no válidos.");
    } else if (totalMinutos >= inicioDia && totalMinutos <= finDia) {
    alert("Buenos días");
    } else if (totalMinutos >= inicioTarde && totalMinutos <= finTarde) {
    alert("Buenas tardes");
    } else {
    alert("Buenas noches");
    }
}

function comprobarBisiesto() {
    let anio = parseInt(prompt("Introduce un año:"));

    if (isNaN(anio) || anio <= 0) {
    alert("Error: introduce un año válido.");
    } else {
    let esBisiesto =
        anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0);

    if (esBisiesto) {
        alert(`El año ${anio} ES bisiesto.`);
    } else {
        alert(`El año ${anio} NO es bisiesto.`);
    }
    }

}
function coordenadas() {
   let x = parseFloat(prompt("Introduce la coordenada X:"));
   let y = parseFloat(prompt("Introduce la coordenada Y:"));

if (isNaN(x) || isNaN(y)) {
  alert("Error: introduce valores numéricos válidos.");
} else {
  if (x === 0 && y === 0) {
    alert("El punto está en el ORIGEN.");
  } else if (x === 0) {
    alert("El punto está sobre el eje Y.");
  } else if (y === 0) {
    alert("El punto está sobre el eje X.");
  } else if (x > 0 && y > 0) {
    alert("El punto está en el PRIMER cuadrante.");
  } else if (x < 0 && y > 0) {
    alert("El punto está en el SEGUNDO cuadrante.");
  } else if (x < 0 && y < 0) {
    alert("El punto está en el TERCER cuadrante.");
  } else {
    alert("El punto está en el CUARTO cuadrante.");
  }
}
}

function obtenerCambio(){
    let precio = parseFloat(prompt("Introduce el precio del producto (€):"));
    let pagado = parseFloat(prompt("Introduce la cantidad pagada (€):"));

    if (isNaN(precio) || isNaN(pagado) || precio < 0 || pagado < 0) {
    alert("Error: introduce valores numéricos válidos.");
    } else if (pagado < precio) {
    alert("El dinero pagado es insuficiente.");
    } else if (pagado === precio) {
    alert("No hay cambio, pago exacto.");
    } else {
    let cambio = pagado - precio;
    alert(`l cambio total es de: ${cambio.toFixed(2)} €`);

    // Convertimos a centimos para evitar problemas con decimales
    let resto = Math.round(cambio * 100);

    
    const valores = [
        { nombre: "500€", valor: 50000 },
        { nombre: "200€", valor: 20000 },
        { nombre: "100€", valor: 10000 },
        { nombre: "50€", valor: 5000 },
        { nombre: "20€", valor: 2000 },
        { nombre: "10€", valor: 1000 },
        { nombre: "5€", valor: 500 },
        { nombre: "2€", valor: 200 },
        { nombre: "1€", valor: 100 },
        { nombre: "50¢", valor: 50 },
        { nombre: "20¢", valor: 20 },
        { nombre: "10¢", valor: 10 },
        { nombre: "5¢", valor: 5 },
        { nombre: "2¢", valor: 2 },
        { nombre: "1¢", valor: 1 },
    ];

    let resultado = "Desglose del cambio:";

    for (let i = 0; i < valores.length; i++) {
        let cantidad = Math.floor(resto / valores[i].valor);
        if (cantidad > 0) {
        resultado += `${cantidad} x ${valores[i].nombre}\n`;
        resto = resto % valores[i].valor;
        }
    }

    alert(resultado);
    }

}

function primerosNumeros(){
    
let n = parseInt(prompt("Introduce un número natural:"));

if (isNaN(n) || n <= 0) {
  alert("Error: introduce un número mayor que 0.");
} else {
  let texto = "";
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    let cuadrado = i * i;
    let cubo = i * i * i;
    suma += i;
    texto += "Número: " + i + " | Cuadrado: " + cuadrado + " | Cubo: " + cubo + "\n";
  }

  texto += "\nSuma total: " + suma;
  alert(texto);
}
}
function hallarNumero(){
    
let cantidad = parseInt(prompt("¿Cuántos números quieres introducir?"));

    if (isNaN(cantidad) || cantidad <= 0) {
    alert("Error: introduce una cantidad válida mayor que 0.");
    } else {
    let suma = 0;
    let menor = Infinity;
    let mayor = -Infinity;

    for (let i = 1; i <= cantidad; i++) {
        let num = parseFloat(prompt("Introduce el número " + i + ":"));
        if (isNaN(num) || num < 0) {
        alert("Error: introduce solo números positivos.");
        i--; // repetimos esta iteración
        continue;
        }

        suma += num;
        if (num < menor) menor = num;
        if (num > mayor) mayor = num;
    }

    let media = suma / cantidad;

    alert(
        "Menor: " + menor +
        "\nMayor: " + mayor +
        "\nMedia: " + media
    );
    }
}

function cambioDivisa(){
// 10) Conversor de Euros a otras monedas (versión simple)

let euros = parseFloat(prompt("Introduce la cantidad en euros:"));

if (isNaN(euros) || euros <= 0) {
  alert("Error: introduce una cantidad válida mayor que 0.");
} else {
  let opcion = parseInt(prompt(
    "Elige la moneda a convertir:\n" +
    "1 - Dólares\n" +
    "2 - Libras\n" +
    "3 - Yenes\n" +
    "4 - Francos Suizos\n" +
    "5 - Coronas Noruegas"
  ));

  let resultado;
  let nombre;

  if (opcion === 1) {
    resultado = euros * 1.06;
    nombre = "Dólares";
  } else if (opcion === 2) {
    resultado = euros * 0.84;
    nombre = "Libras";
  } else if (opcion === 3) {
    resultado = euros * 160.0;
    nombre = "Yenes";
  } else if (opcion === 4) {
    resultado = euros * 0.96;
    nombre = "Francos Suizos";
  } else if (opcion === 5) {
    resultado = euros * 11.6;
    nombre = "Coronas Noruegas";
  } else {
    alert("Opción no válida.");
  }

  if (resultado) {
    alert(euros + " euros son " + resultado.toFixed(2) + " " + nombre + ".");
  }
}
}

function mes(){
    let mes = parseInt(prompt("Introduce el número del mes (1-12):"));

    if (isNaN(mes) || mes < 1 || mes > 12) {
    alert("Error: introduce un número válido entre 1 y 12.");
    } else {
    let nombre;

    switch (mes) {
        case 1:
        nombre = "Enero";
        break;
        case 2:
        nombre = "Febrero";
        break;
        case 3:
        nombre = "Marzo";
        break;
        case 4:
        nombre = "Abril";
        break;
        case 5:
        nombre = "Mayo";
        break;
        case 6:
        nombre = "Junio";
        break;
        case 7:
        nombre = "Julio";
        break;
        case 8:
        nombre = "Agosto";
        break;
        case 9:
        nombre = "Septiembre";
        break;
        case 10:
        nombre = "Octubre";
        break;
        case 11:
        nombre = "Noviembre";
        break;
        case 12:
        nombre = "Diciembre";
        break;
    }

    alert("El mes número " + mes + " es " + nombre + ".");
}
}

function nota(){
    let nota = parseFloat(prompt("Introduce la nota (0-10):"));

    if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Error: introduce una nota válida entre 0 y 10.");
    } else {
    let calificacion;

    if (nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota < 6) {
        calificacion = "Suficiente";
    } else if (nota < 7) {
        calificacion = "Bien";
    } else if (nota < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }

    alert("La calificación es: " + calificacion);   
}
}

function fechaNacimiento(){
    let dia = parseInt(prompt("Introduce el día de nacimiento (1-31):"));
    let mes = parseInt(prompt("Introduce el mes de nacimiento (1-12):"));
    let anio = parseInt(prompt("Introduce el año de nacimiento (por ejemplo 1984):"));

    // fecha valida
    let fechaValida = true;

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
    fechaValida = false;
    } else if (mes < 1 || mes > 12 || dia < 1 || anio <= 0) {
    fechaValida = false;
    } else {
    //dias validos
    let diasMes = 31;
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) diasMes = 30;
    else if (mes === 2) {
        // Año bisiesto
        if ((anio % 400 === 0) || (anio % 4 === 0 && anio % 100 !== 0)) diasMes = 29;
        else diasMes = 28;
    }
    if (dia > diasMes) fechaValida = false;
    }

    if (!fechaValida) {
    alert("Error: la fecha introducida no es válida.");
    } else {
    // Calcular suma inicial
    let suma = dia + mes + anio;

    // Reducir a un solo dígito (versión sin divisiones)
    while (suma >= 10) {
        let texto = String(suma);
        let total = 0;
        for (let i = 0; i < texto.length; i++) {
        total += parseInt(texto[i]);
        }
        suma = total;
    }

    alert("Tu número de Tarot es: " + suma);
    }
}

function salario(){
   let sumaH = 0, sumaM = 0;
let contH = 0, contM = 0;

alert("Introduce los datos. Escribe * como sexo para terminar.");

while (true) {
  let sexo = prompt("Introduce el sexo (H/M o * para terminar):");

  if (sexo === "*") break;
  if (sexo === null) continue;

  sexo = sexo.toUpperCase();

  if (sexo !== "H" && sexo !== "M") {
    alert("Error: introduce H para hombre o M para mujer.");
    continue;
  }

  let sueldo = parseFloat(prompt("Introduce el sueldo (1000 - 2000):"));

  if (isNaN(sueldo) || sueldo < 1000 || sueldo > 2000) {
    alert("Error: el sueldo debe estar entre 1000 y 2000 euros.");
    continue;
  }

  if (sexo === "H") {
    sumaH += sueldo;
    contH++;
  } else {
    sumaM += sueldo;
    contM++;
  }
}

let mediaH = contH > 0 ? (sumaH / contH).toFixed(2) : 0;
let mediaM = contM > 0 ? (sumaM / contM).toFixed(2) : 0;

alert(
  "Número de hombres: " + contH +
  "\nMedia sueldos hombres: " + mediaH + " €" +
  "\nNúmero de mujeres: " + contM +
  "\nMedia sueldos mujeres: " + mediaM + " €"
);
}

function minimoMonedas(){
   
let cantidad = parseFloat(prompt("Introduce la cantidad de dinero en euros:"));

    if (isNaN(cantidad) || cantidad <= 0) {
    alert("Error: introduce una cantidad válida mayor que 0.");
    } else {
    let monedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let texto = "Cantidad: " + cantidad + " €\n\nDesglose en monedas:\n";

    for (let i = 0; i < monedas.length; i++) {
        let contador = 0;

        while (cantidad >= monedas[i]) {
        cantidad = cantidad - monedas[i];
        contador++;
        }

        if (contador > 0) {
        texto += contador + " moneda(s) de " + monedas[i] + " €\n";
        }
    }

    alert(texto);
    }

}
function decimalBinario(){

  let numero = parseInt(prompt("Introduce un número entero positivo:"));

    if (isNaN(numero) || numero < 0) {
      alert("Error: introduce un número entero positivo.");
    } else if (numero === 0) {
      alert("El número en binario es: 0");
    } else {
      let binario = "";

    while (numero > 0) {
      let resto = numero % 2;
      binario = resto + binario;
      numero = parseInt(numero / 2);
    }

    alert("El número en binario es: " + binario);
  }
}
function mayorFecha(){
// Primera fechs
  let d1 = parseInt(prompt("Introduce el día de la primera fecha:"));
let m1 = parseInt(prompt("Introduce el mes de la primera fecha:"));
let a1 = parseInt(prompt("Introduce el año de la primera fecha:"));

// Segunda fecha
let d2 = parseInt(prompt("Introduce el día de la segunda fecha:"));
let m2 = parseInt(prompt("Introduce el mes de la segunda fecha:"));
let a2 = parseInt(prompt("Introduce el año de la segunda fecha:"));


  if (
    isNaN(d1) || isNaN(m1) || isNaN(a1) ||
    isNaN(d2) || isNaN(m2) || isNaN(a2)
  ) {
    alert("Error: introduce solo números válidos.");
  } else {
    // Comparamos primero por año, luego por mes, luego por día
    if (a1 < a2) {
      alert("La primera fecha es anterior.");
    } else if (a1 > a2) {
      alert("La segunda fecha es anterior.");
    } else {
      // años iguales
      if (m1 < m2) {
        alert("La primera fecha es anterior.");
      } else if (m1 > m2) {
        alert("La segunda fecha es anterior.");
      } else {
        // meses iguales
        if (d1 < d2) {
          alert("La primera fecha es anterior.");
        } else if (d1 > d2) {
          alert("La segunda fecha es anterior.");
        } else {
          alert("Las dos fechas son iguales.");
        }
      }
    }
  }
}
function calcularTiempo() {
  let segundos = parseInt(prompt("Introduce una cantidad de tiempo en segundos:"));

  if (isNaN(segundos) || segundos < 0) {
    alert("Error: introduce un número válido de segundos.");
  } else {
    let horas = parseInt(segundos / 3600);
    segundos = segundos % 3600;

    let minutos = parseInt(segundos / 60);
    segundos = segundos % 60;

    alert("Equivale a:\n" + horas + " hora(s), " + minutos + " minuto(s) y " + segundos + " segundo(s).");
  }
}
function juegoBolitas(){
alert("Donde esta la bolita?");
alert("La bolita esta bajo uno de los 3 vasos (1, 2 o 3).");

  // El ordenador elige una posición aleatoria del 1 al 3
  let bolita = Math.floor(Math.random() * 3) + 1;

  // Nosotros elegimos
  let eleccion = parseInt(prompt("¿En qué vaso crees que está la bolita? (1, 2 o 3):"));

  if (isNaN(eleccion) || eleccion < 1 || eleccion > 3) {
    alert("Error: debes elegir 1, 2 o 3.");
  } else {
    if (eleccion === bolita) {
      alert("¡Acertaste! La bolita estaba en el vaso " + bolita + ".");
    } else {
      alert("Error!. La bolita estaba en el vaso " + bolita + ".");
    }
  }
}