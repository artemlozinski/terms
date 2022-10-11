// Сумма десяти чисел
// Дано 10 целых чисел. Вычислите их сумму.
// Напишите программу, использующую наименьшее число переменных.

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
Sum(arr);
