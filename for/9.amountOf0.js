// Количество нулей
// Дано N чисел: сначала вводится число N, затем вводится ровно N целых чисел.
// Подсчитайте количество нулей среди введенных чисел и выведите это количество.
// Вам нужно подсчитать количество чисел, равных нулю, а не количество цифр.

function amount(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum += 1;
    }
  }
  return sum;
}

console.log(amount([5, 0, 0, 0, 200, 2]));
