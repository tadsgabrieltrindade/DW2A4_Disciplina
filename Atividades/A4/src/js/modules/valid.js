//validar CPF | retorna -1 caso o cpf seja inválido
const validar = {
  cpf(value, controlador = 9) {
    let verificadorMomento = [];
    let auxiliar = [];
    let produtoEntreArrays = [];
    let somatorioDosProdutos = 0;
    let restoDaDivisao;
    let result = 0;

    //separa os dígitos em 9 e dps em 10
    //passar 9 no controlador para a 1º vez
    function capturarNumero(value) {
      for (let i = 0; i < controlador; i++)
        verificadorMomento[i] = value.substring(i, i + 1);
    }

    //pegar o auxiliar de acordo com qual dígito verificador é no momento
    function atribuirValoresAoAuxiliar() {
      if (controlador == 9)
        for (let i = 10, index = 0; index <= controlador - 1; i--, index++) {
          auxiliar[index] = i;
        }
      else if (controlador == 10) {
        for (let i = 11, index = 0; index <= controlador - 1; i--, index++) {
          auxiliar[index] = i;
        }
      }
    }

    //multiplicar os arrays e colocar para somar
    function operacoesComOsArrays() {
      for (let i = 0; i <= controlador - 1; i++) {
        produtoEntreArrays[i] = verificadorMomento[i] * auxiliar[i];
        somatorioDosProdutos += produtoEntreArrays[i];
      }
    }

    function verificarIgualdadeDoDigitoVerificador() {
      restoDaDivisao = (somatorioDosProdutos *= 10) % 11;

      if (restoDaDivisao == 10 || restoDaDivisao == 11) restoDaDivisao = 0;

      //sei que é a primeira vez
      if (controlador === 9) {
        if (restoDaDivisao == value.substring(9, 10)) {
          //utilizando recursividade
          result = validar.cpf(value, 10);
        } else {
          //indica cpf inválido
          result = -1;
        }
      }

      //sei que é a segunda vez
      else if (controlador === 10) {
        if (restoDaDivisao != value.substring(10, 11))
          //indica cpf inválido
          result = -1;
      }
    }

    //caso não seja inserido nenhum valor ao cpf
    if (!(value === "")) {
      capturarNumero(value);
      atribuirValoresAoAuxiliar();
      operacoesComOsArrays();
      verificarIgualdadeDoDigitoVerificador();
    } else {
      result = -1;
    }

    return result;
  },

  date(date) {
    const today = new Date();
    date = date.split("/");

    console.log(typeof(today.getFullYear()));
    console.log(date[2] );

    if (date[2] == today.getFullYear()) {
      if ((date[1] - 1) <= 11 && (date[1] - 1) <= today.getMonth()) {
        if (date[0] <= 31 && date[0] <= today.getDate()) {
          return 0;
        }
      }

      console.log(typeof(today.getFullYear()));
      if (date[2] < today.getFullYear()) {
        if ((date[1] - 1) <= 11 ) {
          if (date[0] <= 31) {
            return 0;
          }
        }
      } 
      return -1;
    }
  },

  email(value) {
    if (!(value.includes("@") && value.includes("."))) return -1;
  },

  telefone(value) {
    if (value < 8) return -1;
  },
};

export default validar;
