// Автопробег
// За день машина проезжает n километров. Сколько дней нужно, чтобы проехать маршрут длиной m километров?
// Программа получает на вход числа n и m.

function p(n, m) {
  let a = m / n;
  if (Number.isInteger(a)) {
    return a;
  } else {
    return Math.floor(a + 1);
  }
}

console.log(p(10, 15));
