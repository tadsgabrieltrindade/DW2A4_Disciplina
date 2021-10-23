const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector('.msg')

const items = document.querySelector('.items')


submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

    nameValue = nameInput.value;
    emailValue = emailInput.value;

    //está na aula 09 - Truthy & Falsy
    if(!nameValue || !emailValue){
        errorMessage.innerHTML = 'There are fields with unfilled!';
        errorMessage.classList = 'error';

        //realiza o procedimento depois de x segundos, no caso 5s
        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.classList = '';
        }, 5000);

        return;
    }
    
    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br/>E-mail: ${emailValue}`

    items.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';

})

