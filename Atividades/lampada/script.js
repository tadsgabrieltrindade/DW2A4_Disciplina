var pessoa = {
    nome: 'Gabriel Trindade',
    idade: 19,
    Sexo: 'Santicioli, nem sei o que é ',

    apresentar: function(){
        console.log(`Olá ${pessoa.nome}, vc tem ${pessoa.idade}`),
        pessoa.Sexo =  'm'
    }
}

console.log(pessoa.apresentar())

const{nome, idade, ...outros} = pessoa

console.log(nome)
console.log(idade)


/*
@==========================================
document.getElementById("luz").addEventListener('mouseenter', changeLight)

addEventListener(E, F) é uma função que roda uma função (F) quando um evento é acionado (E) 
o E pode ser onclick, houver...
o F não pode ter parênteses, pois se colocar ele já roda

*/


/*
@================================
document.getElementById('luz').onmousenter = F
Tem que ter o ON na frente do evento
Ele recebe uma função

*/

function changeLight(tipo) {
    if (tipo == "3") {
      document.getElementById("luz").src = 'imagens/quebrada.jpg'
      sessionStorage.setItem('dadoStorage', 3)
    }

    if (sessionStorage.getItem('dadoStorage') != 3) {
      if (tipo == "1")
        path = 'imagens/acesa.jpg'
      if (tipo == "2")
        path = 'imagens/apagada.jpg'

        document.getElementById("luz").src = path
    }
  }

  function reset(){
      sessionStorage.setItem('dadoStorage', 0)
  }