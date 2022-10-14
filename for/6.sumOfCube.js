// Сумма кубов
// По данному натуральному n вычислите сумму 1**3+2**3+3**3+...+n**3.

function cube(a) {
  let b = 0;
  for (let i = 1; i <= a; i++) {
    b += i ** 3;
  }
  console.log(b);
}

cube(9);
