// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), 
// которая принимает один параметр - число. 
// Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и 
// выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона 
// в формате HEX. Используй готовую функцию getRandomHexColor 
// для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое 
// div#boxes,тем самым удаляя все созданные элементы.


const input = document.querySelector('input')
const boxes = document.querySelector('#boxes')
const btnCreate =document.querySelector('button[data-create]')
const btnDestroy =document.querySelector('button[data-destroy]')

input.addEventListener('input', onInputValue)
btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function onInputValue () {
 createBoxes(input.value)
}

let step = 30;


function createBoxes (amount) {
let divArr = [];

 for (let i =1; i<= amount; i+=1) {
  step+=10;
  const div = document.createElement('div');
  div.style.width = `${step}px`;
  div.style.height= `${step}px`;
  div.style.backgroundColor = getRandomHexColor()
  divArr.push(div)
}

console.dir(divArr)
boxes.append(...divArr);

}

function destroyBoxes () {
  boxes.innerHTML = ''
  let step = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}