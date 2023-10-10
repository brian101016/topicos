document.addEventListener("DOMContentLoaded", () => {
  const type = document.getElementById("type");
  const b = document.getElementById("b");
  const w = document.getElementById("w");
  const h = document.getElementById("h");
  const lblb = document.getElementById("lblb");
  const lblw = document.getElementById("lblw");
  const lblh = document.getElementById("lblh");
  const res = document.getElementById("res");

  type.onchange = () => {
    const v = type.selectedIndex;
    lblb.classList.add("hidden");
    lblw.classList.add("hidden");
    lblh.classList.add("hidden");

    // Mostrar los inputs especificos
    if (v === 0) {
      lblb.classList.remove("hidden");
    } else if (v === 1) {
      lblw.classList.remove("hidden");
      lblh.classList.remove("hidden");
    } else {
      lblb.classList.remove("hidden");
      lblh.classList.remove("hidden");
    }

    // Volver a correr calc
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
   * @param {string} n de donde sacar el numero, o un objeto
   * @returns un numero, o un 0 como default
   */
  function num(n) {
    return Number.parseFloat(typeof n === "number" ? n : n.value) || 0;
  }

  // Iniciar
  type.onchange();
});
