const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("#ingredients");

const markup = ingredients.map((el) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${el}</p>`;
  return li;
});
ingredientsRef.append(...markup);
