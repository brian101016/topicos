document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLInputElement}
   */
  const input = document.getElementById("input");
  /**
   * @type {HTMLSelectElement}
   */
  const from_temp = document.getElementById("from-temp");
  /**
   * @type {HTMLSelectElement}
   */
  const to_temp = document.getElementById("to-temp");
  /**
   * @type {HTMLSpanElement}
   */
  const result = document.getElementById("result");
  /**
   * @type {HTMLButtonElement}
   */
  const clear = document.getElementById("clear");

  // Clear
  clear.onclick = () => {
    input.value = "";
    from_temp.value = "ini";
    to_temp.value = "ini";
    result.textContent = "...";
  };

  // Main function
  function exec() {
    const value = Number.parseFloat(input.value) || 0;
    /**
     * @type {"cel" | "far" | "kel" | "ini"}
     */
    const origin = from_temp.value;
    /**
     * @type {"cel" | "far" | "kel" | "ini"}
     */
    const dest = to_temp.value;

    // Evitar si no seleccionamos aun
    if (origin === "ini" || dest === "ini") {
      result.textContent = "...";
      return;
    }

    // Calcular e imprimir
    const resp = fromCel(parseCel(value, origin), dest);
    result.textContent = resp;
  }

  // Colocar funcionalidades
  input.oninput = exec;
  from_temp.onchange = exec;
  to_temp.onchange = exec;

  /**
   *
   * @param {number} num
   * @param {"cel" | "far" | "kel"} from
   */
  function parseCel(num, from = "cel") {
    // (F − 32) * 5/9 = C
    if (from === "far") return ((num - 32) * 5) / 9;
    // K − 273.15 = C
    if (from === "kel") return num - 273.15;
    // C = C
    return num;
  }

  /**
   *
   * @param {number} cel
   * @param {"cel" | "far" | "kel"} to
   */
  function fromCel(cel, to = "cel") {
    // (C * 9/5) + 32 = F
    if (to === "far") return (cel * 9) / 5 + 32;
    // C + 273.15 = K
    if (to === "kel") return cel + 273.15;
    // C = C
    return cel;
  }
});
