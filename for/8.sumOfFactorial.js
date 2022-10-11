// Сумма факториалов
// По данному натуральном n вычислите сумму 1!+2!+3!+...+n!. В решении этой задачи можно использовать только один цикл.
// Пользоваться математической библиотекой math в этой задаче запрещено.

const arr = [1, 2, 3, 4, 5];

function sumf(arr) {
  let fac = 1;
  let sumfac = 1;
  for (let i = 0; i < arr.length; i++) {
    fac *= arr[i];
    sumfac += fac;
  }
  console.log(sumfac - 1);
}

sumf(arr);
