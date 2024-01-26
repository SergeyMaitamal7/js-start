// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и 
// выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector('body')
const nameColor = document.querySelector('.color')
const btn = document.querySelector('.change-color')

btn.addEventListener('click',changeColor)

function changeColor () {
  const randomColor=getRandomHexColor()
  body.style.background=randomColor
  nameColor.textContent=randomColor
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}