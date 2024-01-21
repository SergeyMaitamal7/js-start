// Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых 
// увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

 const spanValue = document.querySelector('#value')
 const btnDec = document.querySelector('button[data-action="decrement"]')
 const btnInc = document.querySelector('button[data-action="increment"]')
 
let counterValue=0;

 btnDec.addEventListener('click', ()=>{
    counterValue -= 1
    spanValue.textContent=counterValue
 })

 btnInc.addEventListener('click', () => {
    counterValue += 1
    spanValue.textContent=counterValue
 }) 
 

//   const onClickDecrement = (event) => {
//     counterValue -= 1;
//     spanValue.textContent = counterValue;
//   };
//   btnDec.addEventListener('click', onClickDecrement);
  
//   const onClickIncrement = (event) => {
//     counterValue += 1;
//     spanValue.textContent = counterValue;
//   };
//   btnInc.addEventListener('click', onClickIncrement);
