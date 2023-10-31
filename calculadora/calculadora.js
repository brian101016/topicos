document.addEventListener("DOMContentLoaded", () => {
  const type = document.getElementById("type");
  const b = document.getElementById("b");
  const w = document.getElementById("w");
  const h = document.getElementById("h");
  const res = document.getElementById("res");

  type.onchange = () => {
    const v = type.selectedIndex;
    b.classList.add("hidden");
    w.classList.add("hidden");
    h.classList.add("hidden");

    // Mostrar los inputs especificos
    if (v === 0) {
      b.classList.remove("hidden");
    } else if (v === 1) {
      w.classList.remove("hidden");
      h.classList.remove("hidden");
    } else {
      b.classList.remove("hidden");
      h.classList.remove("hidden");
    }

    // Reiniciar todo
    b.value = "";
    w.value = "";
    h.value = "";

    calc();
  };

  b.oninput = calc;
  w.oninput = calc;
  h.oninput = calc;

  function calc() {
    // abreviaturas
    const v = type.selectedIndex;
    let r = 0;

    // Calcular según la figura
    if (v === 0) r = num(b) * num(b);
    else if (v === 1) r = num(w) * num(h);
    else r = num(b) * num(h) * 0.5;

    res.textContent = r; // Mostrar
  }

  /**
   * Convierte de string a numero bien
   * @param {string | number | {value: string}} n de donde sacar el numero, o un objeto
   * @returns un numero, o un 0 como default
   */
  function num(n) {
    return (
      Number.parseFloat(
        typeof n === "number" || typeof n === "string" ? n : n.value
      ) || 0
    );
  }

  // Iniciar
  type.onchange();
});
