/** Contiene todos los pokemons que agregemos a la lista. */
const pokemonParty = [];
const tipos = [
  "Selecciona...",
  "Normal",
  "Lucha",
  "Volador",
  "Veneno",
  "Tierra",
  "Roca",
  "Bicho",
  "Fantasma",
  "Acero",
  "Fuego",
  "Agua",
  "Planta",
  "Eléctrico",
  "Psíquico",
  "Hielo",
  "Dragón",
  "Siniestro",
  "Hada",
];

document.addEventListener("DOMContentLoaded", () => {
  // CONTROLS
  const input = document.getElementById("nombreInput");
  const buscar = document.getElementById("buscar");
  const limpiar = document.getElementById("limpiar");

  // ALERT
  const span = document.getElementById("info-alert");
  const btn = document.getElementById("close-alert");
  const div = document.getElementById("alert");

  // SHOW
  const allListPoke = document.getElementById("pokemon-list");

  function _alert(msg) {
    div.classList.remove("hide");
    span.textContent = msg;
    btn.onclick = () => div.classList.add("hide");
  }

  async function buscar() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;

    try {
      const response = await fetch(apiUrl);

      if (response.status === 200) {
        const pokemonData = await response.json();
        console.log(pokemonData);
        // addPokemon(pokemonData.results, filtros);
      } else _alert("No se encontraron pokémon");
    } catch (error) {
      _alert("Error al obtener los datos: " + error);
    }
  }

  async function addPokemon(pokemon) {
    allListPoke.innerHTML = "";

    try {
      const response = await fetch(pokemon.url);
      if (response.status === 200) {
        const pokemonData = await response.json();
        if (
          pokemonData.name.includes(filtros.nombre) &&
          pokemonData.abilities.some((ability) =>
            ability.ability.name.includes(filtros.habilidad)
          )
        ) {
          const pokemonElement = document.createElement("div");
          pokemonElement.classList.add("pokemon-card");

          pokemonElement.innerHTML = `
                        <div class="pokemonBox">
                            <div class="ajuste">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png">
                                <h1>${pokemonData.name}</h1>
                            </div>
                            <div class="textStyle">
                                <p>Habilidades: ${pokemonData.abilities[0].ability.name}</p>
                                <p>Base de experiencia: ${pokemonData.base_experience}</p>
                                <button>Agregar</button>
                            </div>
                        </div>
                    `;

          pokemonElement
            .querySelector("button")
            .addEventListener("click", function () {
              agregarPokemonAlEquipo(pokemonData);
            });

          allListPoke.appendChild(pokemonElement);
        }
      }
    } catch (error) {
      _alert("Error al obtener los datos del pokémon: " + error);
    }
  }

  function agregarPokemonAlEquipo(pokemonData) {
    if (pokemonParty.includes(pokemonData.name)) {
      window._alert("Este pokemon existe en el equipo!");
      return;
    } else if (pokemonParty.length >= 6) {
      window._alert("El equipo pokemon ya está lleno!");
      return;
    }

    pokemonParty.push(pokemonData.name);

    const equipoPokemon = document.getElementById("pokemon-agregar");
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon-card");

    pokemonElement.innerHTML = `
        <div class="pokemonBox">
            <div class="ajuste">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png">
                <h1>${pokemonData.name}</h1>
            </div>
            <div class="textStyle">
                <p>Habilidades: ${pokemonData.abilities[0].ability.name}</p>
                <p>Base de experiencia: ${pokemonData.base_experience}</p>
                <button>Quitar</button>
            </div>
        </div>
    `;

    pokemonElement
      .querySelector("button")
      .addEventListener("click", function () {
        const index = pokemonParty.indexOf(pokemonData.name);
        if (index != -1) pokemonParty.splice(index, 1);
        equipoPokemon.removeChild(pokemonElement);
      });

    equipoPokemon.appendChild(pokemonElement);
  }

  function filtro() {
    const nombreInput = document.getElementById("nombreInput");
    const habilidadInput = document.getElementById("habilidadInput");
    buscar({
      nombre: nombreInput.value.toLowerCase(),
      habilidad: habilidadInput.value.toLowerCase(),
    });
  }

  buscar.onclick = buscar;
});

/*

UNUSED

  const select = document.getElementById("tipos-pokemon");
  tipos.forEach((tipo) => {
    const opt = document.createElement("option");
    opt.text = opt.value = tipo;
    if (tipo === "Selecciona...") opt.disabled = true;
    select.appendChild(opt);
  });


 */
