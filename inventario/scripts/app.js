// Clase del producto a ingresar
class Product {
  constructor(name, price, quantity, date) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.date = date;
  }
}

// Clase para interactuar con la interfaz
class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Product: ${product.name}</strong>
          <strong>Product Price: ${product.price}</strong>
          <strong>Product Quantity: ${product.quantity}</strong>
          <strong>Product Date: ${product.date}</strong>
        </div>
      </div>
    `;

    productList.appendChild(el);
  }

  resetForm() {
    document.getElementById("product-form").reset();
    document.getElementById("year");
  }

  deleteProduct() {}
  showMessage() {}
}

// Manipulacion de DOM
const el_name = document.getElementById("name");
const el_price = document.getElementById("price");
const el_quantity = document.getElementById("quantity");
const el_year = document.getElementById("year");

const form = document.getElementById("product-form");
form.onsubmit = (e) => {
  e.preventDefault();
  console.log("#####");
  console.log("Name: ", el_name.value);
  console.log("Price: ", el_price.value);
  console.log("Quantity: ", el_quantity.value);
  console.log("Year: ", el_year.value);
};

// hook, le pasas dos parametros,
// el primero es un
//       callback  dependencias
useEffect(() => {
  // Cuando se modifique el clicks...
  // setClicks(0);
}, [clicks]);
