// Факториал
// Факториалом числа n называется произведение 1 × 2 × ... × n. Обозначение: n!.
// По данному натуральному n вычислите значение n!. Пользоваться математической библиотекой math в этой задаче запрещено.

function f(a) {
  let fac = 1;
  for (let i = 1; i <= a; i++) {
    fac *= i;
  }
  return fac;
}

console.log(f(6));
