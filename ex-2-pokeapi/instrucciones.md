- Input para introducir el nombre del pokemon

- Boton para buscar y añadir (es uno solo, asumiremos que al buscar ya lo estamos añadiendo)

- Boton para reiniciar el equipo (Este deberá estar bloqueado hasta que se junte el tamaño maximo del equipo)

- Bloquear el boton buscar cuando se alcance el tamaño maximo de 3 en el equipo.

- Cada Pokemon enlistado debe de contar con su foto, nombre, experiencia, primera habilidad y tipo (leer abajo para encontrar la propiedad de la imagen).

- Generar alerta Visual cuando no se encuentre el pokemon deseado (NO USAR ALERT NI CONSOLE.LOG)

- Generar alerta Visual cuando tu equipo este completo

- Generar alerta visual cuando clickees el buscar y el input se encuentre vacío

- Generar alerta visual cuando no haya conexión a internet

- Limpiar input cuando se genere la busqueda y se encuentre el pokemon

- Crear un nuevo arreglo almacenando todos los pokemons que se hayan buscado (y encontrado, obvio e independientemente de que ya hayan reiniciado su equipo de pokemones varias veces, este historial solo estará hasta que refresquen el navegador) OJO: Para este paso tendrás que guardar cada pokemon nombre, experiencia e imagen (la propiedad sprites.front_default)
- Genera un nuevo boton que este hasta abajo y diga: Ordenar historial de pokemones en base a su nivel de experiencia
- Enlistarlos

- Si no hay pokemones en el historial, ese botón no hará nada mas que mostrar una alerta diciendo que no existen pokemones en el historial aún

-Utilizando el mismo arreglo generado de historial, filtrar los pokemones para saber si existe o no un pokemon de tipo agua(water) en el historial
-Generar un boton para preguntar ¿Existe un pokemon de agua en el historial?
-En dado caso de que si, al dar click que muestre la imagen otorgada en el grupo de whatsapp https://archives.bulbagarden.net/media/upload/thumb/b/b6/Squirtle_Squad.png/1200px-Squirtle_Squad.png
-En dado caso de que no, mostrar un mensaje simple en un label

# Criterios

- Codigo separado por funciones. (Aplica para todas las funcionalidades del examen) Ejemplo:
  getPokemon() {
  solo debería de contener el fetch, el return con la respuesta y validación
  }

- Nombres de variables bien definidos. Nombres con significado y siguiendo la sig estructura ej: pokemonName

- Utilizar Try Catch para validar la conexión al servidor

- Validar con el response cuando no se encuentre un pokemon (Ojo, borrar cache cuando testeen esta parte)

- El evento CLICK debe de estar lo mas vacío posible (solo llamada a una función que inicialice todo o si acaso 1-2 lineas más)

Hints:
-.childElementCount Te devuelve el número de nodos hijos de un elemento html
-.disabled = true / false te ayuda a activar y desactivar elementos html
-return; vacío te permite cancelar la ejecución de codigo en un escenario donde no ya no hay nada que hacer
-404 es el status para checar si encontro algo en el servidor o no
-Las alertas pueden ser generadas al igual que los elementos en la lista de pokemones.. mismo codigo, diferente aplicación
-Para renderizar la imagen hay que crear un tag < img>..
