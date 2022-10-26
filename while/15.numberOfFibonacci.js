// Номер числа Фибоначчи
// Дано натуральное число A. Определите, каким по счету числом Фибоначчи оно является,
// то есть выведите такое число n, что φn = A.
// Если А не является числом Фибоначчи, выведите число -1.

function fibNum(n) {
  let c = 0;
  let b = 1;
  let a = 0;
  count = 0;
  while (c <= n) {
    c = a + b;
    a = b;
    b = c;
    count++;
    if (n == a) {
      return count;
    } else if (a > n || count > n) {
      return -1;
    }
  }
}

console.log(fibNum(3));
