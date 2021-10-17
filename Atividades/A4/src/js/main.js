import Mascara from './modules/masks.js'
import Validar from './modules/valid.js'



//acho que vai servir para validação
class data {
    constructor(nome, cpf,  dataNascimento, email, telefone, cep){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.telefone = telefone;
        this.cep = cep;
    }
}

//mascarar inputs
document.querySelectorAll("input").forEach((input) => {
    const field = input.dataset.js;

    input.addEventListener(
      "input",
      (e) => {
        e.target.value = Mascara[field](e.target.value);
      },
      false
    );
  });


 function cadastrar(){
    console.log("olhá ")
 }


 