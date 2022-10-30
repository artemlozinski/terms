// Количество различных элементов
// Дан список, упорядоченный по неубыванию элементов в нем. Определите, сколько в нем различных элементов.

function countDiff(arr) {
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(countDiff([1, 1, 2, 2, 2, 3, 4, 5, 6, 7]));
