// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const [decrement, span, increment] =
  document.querySelector("#counter").children;
decrement.onclick = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

increment.onclick = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
