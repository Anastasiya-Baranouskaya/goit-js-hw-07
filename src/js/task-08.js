// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const numberInput = document.querySelector('input[type="number"]');
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonClear = document.querySelector('button[data-action="destroy"]');
const boxGallery = document.querySelector("div#boxes");

let defaultSize = 30;

const handleButtonRenderClick = () => {
  const amount = +numberInput.value;
  createBoxes(amount);
};

const createBoxes = (amount) => {
  const collection = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = createRandom();
    div.style.width = defaultSize + "px";
    div.style.height = defaultSize + "px";
    defaultSize += 10;

    collection.push(div);
  }
  boxGallery.append(...collection);
};

const handleButtonClearClick = () => {
  boxGallery.innerHTML = "";
  defaultSize = 30;
  numberInput.value = 0;
};

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}
buttonRender.addEventListener("click", handleButtonRenderClick);
buttonClear.addEventListener("click", handleButtonClearClick);
