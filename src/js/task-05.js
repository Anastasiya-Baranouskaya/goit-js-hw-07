// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const nameInputRef = document.querySelector("#name-input");
console.log(nameInputRef);
const nameOutputRef = document.querySelector("#name-output");
function changeName() {
  nameOutputRef.textContent = nameInputRef.value.trim()
    ? nameInputRef.value
    : "незнакомец";
}
nameInputRef.addEventListener("input", changeName);
