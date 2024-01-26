// Напиши скрипт, который при потере фокуса на 
// инпуте (событие blur), 
// проверяет его содержимое на правильное количество
//  введённых символов.

// Сколько символов должно быть в инпуте,
//  указывается в его атрибуте data-length.
// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное 
// - красным.
// Для добавления стилей, используй CSS-классы
//  valid и invalid, которые мы уже добавили в исходные файлы задания.


const input = document.querySelector('#validation-input')
input.addEventListener('blur', onBlurValidationdsColour)
const validLength = Number(input.dataset.length);
function onBlurValidationdsColour(event) {
    input.classList.add('invalid')
    input.classList.remove('valid')
    if (input.value.length === validLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}
// function onBlurValidationdsColour(event) {
//       event.currentTarget.classList.add('invalid');
//       event.currentTarget.classList.remove('valid');
//       if (event.currentTarget.value.length === validLength) {
//         event.currentTarget.classList.add('valid');
//         event.currentTarget.classList.remove('invalid');
//       }
//     }




