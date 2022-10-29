// Наибольший элемент
// Дан список чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке.
// Если наибольших элементов несколько, выведите индекс первого из них.

function maxElement(arr) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return [max, index];
}

console.log(maxElement([1, 2, 3, 4, 4, 4, 2, 1]));
