// Стандартное отклонение
// https://pythontutor.ru/lessons/while/problems/std_dev/

function normal(arr) {
  let n = 0;
  let sumSqare = 0;
  let sum = 0;
  let i = 0;
  while (arr[i] !== 0) {
    n++;
    sum += arr[i];
    sumSqare += arr[i] ** 2;
    i++;
  }

  return ((sumSqare - sum ** 2 / n) / (n - 1)) ** 0.5;
}

console.log(normal([1, 7, 9, 0]));
