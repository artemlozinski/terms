// Количество совпадающих пар
// Дан список чисел. Посчитайте, сколько в нем пар элементов, равных друг другу.
// Считается, что любые два элемента, равные друг другу образуют одну пару, которую необходимо посчитать.

function countCouples(arr) {
  let count = 0;
  let object = 0;
  for (let i = 0; i < arr.length; i++) {
    object = arr[i];
    for (let e = i + 1; e < arr.length; e++) {
      if (arr[i] === arr[e]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countCouples([1, 1, 1]));
