// tarea, investigar promesas, callbacks, async await, una hoja de cada 1.
document.getElementById("search").addEventListener("click", () => {
  displayPokemon();
});

async function displayPokemon() {
  const pokemonName = document.getElementById("pokemon").value;
  const pokemon = await getPokemon(pokemonName);
  addPokemonUI(pokemon);
}

async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await response.json();
}

function addPokemonUI(pokemon) {
  const pokemonList = document.getElementById("pokemon-container");
  const element = document.createElement("div");
  element.innerHTML = `
    <strong>ID: ${pokemon.id}</strong>
    <strong>Name: ${pokemon.name}</strong>
    <strong>Base Experience: ${pokemon.base_experience}</strong>
    <strong>First Ability: ${pokemon.abilities[0].ability.name}</strong>
  `;
  pokemonList.appendChild(element);
}
