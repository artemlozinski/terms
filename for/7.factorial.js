// Факториал
// Факториалом числа n называется произведение 1 × 2 × ... × n. Обозначение: n!.
// По данному натуральному n вычислите значение n!. Пользоваться математической библиотекой math в этой задаче запрещено.

const arr = [1, 2, 3, 4];

function f(arr) {
  let fac = 1;
  for (let i = 0; i < arr.length; i++) {
    fac *= arr[i];
  }
  console.log(fac);
}

f(arr)
