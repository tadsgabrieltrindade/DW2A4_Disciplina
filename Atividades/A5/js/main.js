import Mascara from "./modules/masks.js";
import { consultarCep, covidBrasilApi } from "./modules/api.js";

const button = document.querySelector("#button");
const cpfInput = document.querySelector("#input-cpf");

button.addEventListener("click", (e) => {
  e.preventDefault();

  //   Promise.all([consultarCep(cpfInput.value)]).then((data) => {
  //     data = Object.values(data[0])
  //     document.querySelector('#span_estado').innerHTML = data[5];
  //   });

  Promise.all([consultarCep(cpfInput.value)]).then((dataCep) => {
    dataCep = Object.values(dataCep[0]);
    let uf = dataCep[5];
    if(uf != undefined){
        Promise.all([covidBrasilApi(uf)]).then((dataCovid) => {
            preencherResultados(dataCovid);
          });
    }else{
        alert('CEP incorreto!');
    }
  });
});

cpfInput.addEventListener("input", (e) => {
  e.target.value = Mascara.cep(e.target.value);
});

function preencherResultados(data) {
  data = data[0];
  document.querySelector("#span_estado").innerHTML = data.state;
  document.querySelector("#span_casos").innerHTML = data.cases;
  document.querySelector("#span_mortes").innerHTML = data.deaths;
  document.querySelector("#span_suspeitos").innerHTML = data.suspects;
  document.querySelector("#span_recusados").innerHTML = data.refuses;
  document.querySelector("#span_atualizacao").innerHTML = formatarDate(data.datetime);
}

function formatarDate(value) {
  const date = new Date(value);
  let day = date.getDate();
  let month = (date.getMonth() + 1);
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${day}/${month}/${year} às ${hours}:${minutes} (Horário de Brasilia)`;
}
