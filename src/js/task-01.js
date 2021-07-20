const ingredientsListRef = document.querySelector("#categories");
// console.log(ingredientsListRef.children);
console.log(`В списке ${ingredientsListRef.children.length} категории.`);

const textListRef = [...ingredientsListRef.children];
// console.log(textListRef);
textListRef.forEach((item) => {
  console.dir(`Категория:${item.children[0].textContent}`);
  console.dir(`Количество элементов: ${item.children[1].children.length}`);
});
