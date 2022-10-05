// Гипотенуза
// Дано два числа a и b. Выведите гипотенузу треугольника с заданными катетами.

function h(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(h(1, 1));
