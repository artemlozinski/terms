// Сумма N чисел
// Дано несколько чисел. Вычислите их сумму. Сначала вводите количество чисел N, затем вводится ровно N целых чисел.
// Какое наименьшее число переменных нужно для решения этой задачи?

function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(Sum([235, 56]));
