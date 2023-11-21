const apiKey = "ziRL3euV2nNW4kQJCjwVcw==1bu2IaE7860vyBqr";

const everyCat = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

document.addEventListener("DOMContentLoaded", () => {
  const category = document.getElementById("category");
  const generate = document.getElementById("generate");
  const container = document.getElementById("container");

  for (const cat of everyCat) {
    const op = document.createElement("option");
    op.text = op.value = cat;
    category.appendChild(op);
  }
  category.selectedIndex = 0;

  generate.onclick = async () => {
    console.log("Categoria: ", category.value);
    const resp = await makeRequest();
    console.log(resp);
    showQuote(resp[0]);
  };

  async function makeRequest() {
    const req = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=" + category.value,
      {
        method: "GET",
        headers: { "X-Api-Key": apiKey },
        contentType: "application/json",
      }
    );
    return await req.json();
  }

  /**
   *
   * @param {{author: string, category: string, quote: string}} obj
   */
  function showQuote(obj) {
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
      <q>${obj.quote}</q> <br />
      <i>${obj.author}</i> -
      <strong>${obj.category}</strong>
    `;
    container.appendChild(div);
  }
});
