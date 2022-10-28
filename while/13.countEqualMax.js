// Количество элементов, равных максимуму
// Последовательность состоит из натуральных чисел и завершается числом 0.
// Определите, сколько элементов этой последовательности равны ее наибольшему элементу.

function countMax(arr) {
  let i = 0;
  let max = 0;
  let count = 1;
  while (arr[i] !== 0) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] === max) {
      count++
    }
    i++;
  }
  return count;
}

console.log(countMax([1, 7, 9, 9, 9, 0]));
