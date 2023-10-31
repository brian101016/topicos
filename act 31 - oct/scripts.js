document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("api-call");
  const inp = document.getElementById("search");
  const span = document.getElementById("show");

  /**
   * @param {number} id
   * @returns {{name: string} | string}
   */
  async function call(id) {
    try {
      const response = await fetch("https://swapi.dev/api/people/" + id);

      if (response.status !== 200) {
        return "Por favor ingresa un numero válido...";
      }

      return await response.json();
    } catch (e) {
      return "Error inesperado, vuelva a intentarlo";
    }
  }

  /**
   * @param {{name: string} | string} val
   */
  function show(val) {
    span.textContent = val.name || val;
  }

  function parseNumber(str) {
    return Number.parseInt(str) || 0;
  }

  btn.onclick = async () => {
    const value = parseNumber(inp.value);
    const result = await call(value);

    show(result);
  };
});
