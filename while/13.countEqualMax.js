// Количество элементов, равных максимуму
// Последовательность состоит из натуральных чисел и завершается числом 0.
// Определите, сколько элементов этой последовательности равны ее наибольшему элементу.

const arr = [];

function countMax(arr) {
  let i = 0;
  let max = 0;
  let count = 0;
  let arr1 = [];
  while (arr[i] !== 0) {
    if (arr[i] > max) {
      max = arr[i];
    }
    arr1.push(arr[i]);
    i++;
  }
  for (let e = 0; e < i; e++) {
    if (arr1[e] == max) {
      count++;
    }
  }
  return count;
}

console.log(countMax([1, 7, 9, 0]));
