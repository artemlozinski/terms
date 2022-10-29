// Больше предыдущего
// Дан список чисел. Выведите все элементы списка, которые больше предыдущего элемента.

function morePrevious(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(morePrevious([1, 5, 2, 4, 3, 7]));
