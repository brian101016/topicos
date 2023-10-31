// INICIO
console.log("Start app...");
window.alert("Bienvenido al sistema");

// VARIABLES
const alumnos = [];
let lleno = false; // para el Do-While
// Es la que vamos a usar para preguntarle al usuario si quiere seguir metiendo info

// RECOLECTAR INFORMACION
do {
  // Esto nos muestra un control para obtener datos, y nos regresa un string.
  const nombre = window.prompt("Ingresa tu nombre: ");
  let edad = window.prompt("Ingresa tu edad: "); // Necesitamos pasarlo a numero
  edad = Number.parseInt(edad); // Ahora si es como numero

  alumnos.push({ nombre: nombre, edad: edad }); // Ingresar el objeto

  lleno = window.confirm("Su salón está lleno?"); // Esto regresa un boolean, y ese es el que usamos para hacer, o no hacer ciclos.
} while (!lleno); // Si no esta lleno, volvemos a ciclar

// MOSTRAR INFORMACION SENCILLA
for (let i = 0; i < alumnos.length; i++) {
  const un_alumno = alumnos[i]; // Mientras estemos pasando el ciclo, vamos a agarrar un item,

  // De este item, tenemos que mostrar el nombre y la edad. entonces hacemos los mismo que como un objeto
  console.log(
    `ALUMNO #${i}: \n` +
      `    nombre: ${un_alumno.nombre}\n` +
      `    edad: ${un_alumno.edad}\n`
  );
  // Con esto es todo, se imprimen todos los usuarios
}

// FILTAR ALUMNOS MAYORES A 18
// para pasarle una funcion, voy a ponerle una arrow
const adultos = alumnos.filter((alumno) => {
  if (alumno.edad >= 18) {
    // Es mayor de edad, entonces.. lo guardamos
    // como lo guardamos?
    return true;
  } else {
    // No es, entonces lo omitimos y ya
    return false;
  }
});

console.log(adultos); // esto es para ver si funciono o no , vamos a probarlo antes de continuar

// Ahora, solo lo imprimimos, le pasamos el i, porque nos permite ponerle tanto el elemento,
// como el indice, despues nos permite manipular el array como tal, pero ese no lo usamos
adultos.forEach((adulto, i) => {
  console.log(
    `ADULTOS #${i}: \n` +
      `    nombre: ${adulto.nombre}\n` +
      `    edad: ${adulto.edad}\n`
  );
});

/**

  1. dar bienvenida - LISTO

  2. Preugntar al usuario ?cual es el nombre? y cual es la edad - LISTO

  3. Eso se almacena en un arreglo, nombre y edad.
  dentro del arreglo vamos a meter un objeto, para meterlo vamos a usar un 
  el objeto se como .push({ nombre: nombre, edad: edad }) - LISTO

  4. Cuando tengamos los datos, vamos a preguntar con el window.confirm()
  le preguntamos "su salon esta lleno?", y nos regresa un true/false - LISTO

  Esto del true o false es para manipular el do while,
  mantener el ciclo siempre que se escoja true

  5. Para imprimir, usamos el for normal,

  6. Para filtrar, vamos a usar un forEach para ver quienes son mayores 18 edad

  Y eso es todo, los puntos que estan en rojo, no son pasos, son requisitos, es decir que los tenemos que cumplir
  pero todo eso ya esta incluido en esto

  Usar un i para imprimir el id.
  

  dice el profe que no vamos a usar html, puro JS
  todo es por consola... la info que mostremos es por consola tambien

  lo va a borrar, pero ya lo anote

 */
