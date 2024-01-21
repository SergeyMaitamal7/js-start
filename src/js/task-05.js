// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input), подставляет 
//  его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 
// "Anonymous".

const input = document.querySelector('#name-input')
const spanText = document.querySelector('#name-output')

input.addEventListener('input', onInputEvent)

function onInputEvent(event) {
    spanText.textContent="Anonymous"
    if (input.value !=='') {
        spanText.textContent=input.value
        // spanText.textContent = event.currentTarget.value;
    }
 }


