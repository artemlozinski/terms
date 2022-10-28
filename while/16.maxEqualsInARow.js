// Максимальное число идущих подряд равных элементов
// Дана последовательность натуральных чисел, завершающаяся числом 0.
// Определите, какое наибольшее число подряд идущих элементов этой последовательности равны друг другу.

function row(arr) {
  let i = 0;
  let countMax = 0;
  let bufer = 0;
  while (arr[i] !== 0) {
    if (arr[i - 1] === arr[i]) {
      bufer++;
      if (bufer > countMax) {
        countMax = bufer;
      } 
    }
    else {
      bufer = 0;
    }
    i++;
  }
  return countMax + 1;
}

console.log(row([1, 7, 7, 7, 9, 9, 1, 0]));
