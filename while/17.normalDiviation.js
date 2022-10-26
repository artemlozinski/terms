// Стандартное отклонение
// https://pythontutor.ru/lessons/while/problems/std_dev/

let arr = [];

function normal(arr) {
  let n = 0;
  let sumSqare = 0;
  let sum = 0;
  let i = 0;
  while (arr[i] !== 0) {
    sum+=arr[i]
    n++;
    i++
  }
  const mid = sum/n
  for (let i = 0; i < n; i++) {
    sumSqare+=(arr[i] - mid)**2
  } return (mid/(n-1))**0.5
}

console.log(normal([1, 7, 9, 0]));
