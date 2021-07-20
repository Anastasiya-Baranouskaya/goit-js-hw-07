// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");

const changeNumber = function ({ target: { value } }) {
  value.length === +inputRef.dataset.length
    ? togleClass("valid", "invalid")
    : togleClass("invalid", "valid");
};
function togleClass(add, rem) {
  inputRef.classList.add(add);
  inputRef.classList.remove(rem);
}
inputRef.addEventListener("blur", changeNumber);
