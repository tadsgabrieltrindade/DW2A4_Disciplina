import Mascara from './modules/masks.js'
import API from './modules/api.js'

const button = document.querySelector('#button')
const cpfInput = document.querySelector('#input-cpf')



button.addEventListener('click', e =>{
    e.preventDefault();
    API.init('06814080')
})

cpfInput.addEventListener('input', e=>{
    e.target.value = Mascara.cep(e.target.value)
})