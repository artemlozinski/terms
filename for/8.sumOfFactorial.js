// Сумма факториалов
// По данному натуральном n вычислите сумму 1!+2!+3!+...+n!. В решении этой задачи можно использовать только один цикл.
// Пользоваться математической библиотекой math в этой задаче запрещено.

function sumf(a) {
  let fac = 1;
  let sumfac = 1;
  for (let i = 1; i <= a; i++) {
    fac *= i;
    sumfac += fac;
  }
  return sumfac - 1;
}

console.log(sumf(7));
