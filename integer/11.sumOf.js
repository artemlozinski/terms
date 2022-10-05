// Сумма цифр
// Дано трехзначное число. Найдите сумму его цифр.

function sum(x) {
  let a = Math.floor(x / 100);
  let b = Math.floor(x / 10) % 10;
  let c = x % 10;
  return a + ", " + b + ", " + c;
}

console.log(sum(829));
