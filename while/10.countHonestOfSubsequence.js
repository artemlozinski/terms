// Количество четных элементов последовательности
// Определите количество четных элементов в последовательности, завершающейся числом 0

const arr = [];

function honest(arr) {
  let i = 0;
  let hon = 0;
  while (arr[i] !== 0) {
    if (arr[i] % 2 == 0) {
      hon++;
    }
    i++;
  }
  return hon;
}

console.log(honest([1, 7, 4, 9, 0]));
