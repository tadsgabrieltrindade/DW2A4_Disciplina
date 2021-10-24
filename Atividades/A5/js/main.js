import Mascara from "./modules/masks.js";
import { consultarCep } from "./modules/api.js";

const button = document.querySelector("#button");
const cpfInput = document.querySelector("#input-cpf");

button.addEventListener("click", (e) => {
  e.preventDefault();

  Promise.all([consultarCep(cpfInput.value)]).then((data) => {
    data = Object.values(data[0])
    document.querySelector('#span_estado').innerHTML = data[5];
  });
});

cpfInput.addEventListener("input", (e) => {
  e.target.value = Mascara.cep(e.target.value);
});
