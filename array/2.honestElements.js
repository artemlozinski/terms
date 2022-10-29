// Четные элементы
// Выведите все четные элементы списка. При этом используйте цикл for, перебирающий элементы списка, а не их индексы!

function honestElement(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(honestElement([1, 2, 2, 3, 3, 3, 4]));
