// Минимум из трех чисел
// Условие: Даны три целых числа. Выведите значение наименьшего из них.

function min(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  }
  return c;
}

console.log(min(-5, -3, -3));
