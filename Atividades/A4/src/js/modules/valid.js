//validar CPF
const validar = {
  cpf(value, controlador) {
    var verificadorMomento = [];
    var auxiliar = [];
    var produtoEntreArrays = [];
    var somatorioDosProdutos = 0;
    var restoDaDivisao;

    //separa os dígitos em 9 e dps em 10
    //passar 9 no controlador para a 1º vez
    function capturarNumero(value) {
      for (var i = 0; i < controlador; i++)
        verificadorMomento[i] = value.substring(i, i + 1);
    }

    capturarNumero(value); //tinha controlador

    //pegar o auxiliar de acordo com qual dígito verificador é no momento
    function atribuirValoresAoAuxiliar() {
      if (controlador == 9)
        for (var i = 10, index = 0; index <= controlador - 1; i--, index++) {
          auxiliar[index] = i;
        }else if(controlador == 10){
            for (var i = 11, index = 0; index <= controlador - 1; i--, index++) {
                auxiliar[index] = i;
              }
        }
    }

    atribuirValoresAoAuxiliar(); //tinha controlador

    //multiplicar os arrays e colocar para somar
    function operacoesComOsArrays() {
      for (var i = 0; i <= controlador - 1; i++) {
        produtoEntreArrays[i] = verificadorMomento[i] * auxiliar[i];
        somatorioDosProdutos += produtoEntreArrays[i];
      }
    }

    operacoesComOsArrays(); //tinha controlador

    function verificarIgualdadeDoDigitoVerificador() {
      restoDaDivisao = (somatorioDosProdutos *= 10) % 11;

      if (restoDaDivisao == 10 || restoDaDivisao == 11) restoDaDivisao = 0;

      //sei que é a primeira vez
      if (controlador == 9) {
        if (restoDaDivisao == value.substring(9, 10)) {
            validar.cpf(value, 10);
        } else {
          console.log(
            "CPF Inválido! Primeiro dígito verificador não correspondente."
          );
        }
        
      } 
      
      //sei que é a segunda vez
      else if (controlador == 10) {
        if (restoDaDivisao == value.substring(10, 11))
          console.log("CPF Válido");
        else
          console.log(
            "CPF Inválido! Segundo dígito verificador não correspondente."
          );
      }
    }

    verificarIgualdadeDoDigitoVerificador() //tinha controlador

  },

  dataNascimento(value){
    
  }
};

export default validar;
