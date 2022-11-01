// Четные индексы
// Выведите все элементы списка с четными индексами (то есть A[0], A[2], A[4], ...).

function honest(array) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arr.push(array[i])
    }
  }
  return arr
}

console.log(honest([1, 2, 3, 4, 5, 6]));
