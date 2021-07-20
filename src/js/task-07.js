// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-control");
console.log(input);
const text = document.querySelector("#text");
console.log(text);
input.addEventListener("input", function () {
  text.style.fontSize = input.value + "px";
});
