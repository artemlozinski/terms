// Четные индексы
// Выведите все элементы списка с четными индексами (то есть A[0], A[2], A[4], ...).

function honest(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(honest([1, 2, 3, 4, 5, 6]));
