import Mascara from "./modules/masks.js";
import Validar from "./modules/valid.js";

const fields = document.querySelectorAll("input");
const submitButton = document.querySelector("#button");
let validated = false;

class data {
  constructor(nome, cpf, dataNascimento, email, telefone, cep) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
  }
}

//mascarar inputs
fields.forEach((input) => {
  const field = input.dataset.js;

  //no caso do email
  if (field != undefined) {
    input.addEventListener(
      "input",
      (e) => {
        e.target.value = Mascara[field](e.target.value);
      },
      false
    );
  }
});

function validarCPF() {
  //utilização de uma expressão regular para pegar somente os números
  const cpfValue = fields[1].value.replace(/[^0-9]/g, "");

  if (Validar.cpf(cpfValue) === -1) {
    fields[1].classList = "errorInput";
  } else {
    fields[1].classList = "";
    console.log("CPF é válido!");
  }
}

function validarDataNascimento() {
  if (Validar.date(fields[2].value) === -1) {
    fields[2].classList = "errorInput";
  } else {
    fields[2].classList = "";
    console.log("Data de nascimento válido!");
  }
}

function validarEmail() {
  if (Validar.email(fields[3].value) == -1) {
    fields[3].classList = "errorInput";
  } else {
    fields[3].classList = "";
    console.log("E-mail é válido!");
  }
}

function validarTelefone() {
  const phoneValue = fields[4].value.replace(/[^0-9]/g, "");

  if (Validar.telefone(phoneValue) === -1) {
    fields[4].classList = "errorInput";
  } else {
    fields[4].classList = "";
    console.log("Telefone válido!");
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validarCPF();
  validarDataNascimento();
  validarEmail();
  validarTelefone();

  validated = false;
  fields.forEach((tag) => {
    if (tag.classList.contains("errorInput")) validated = true;
  });
  if (!validated) alert("Campos validados com sucesso!");
});
