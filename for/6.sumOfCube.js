// Сумма кубов
// По данному натуральному n вычислите сумму 13+23+33+...+n3.

const arr = [1, 2];
let b = 0;

function cube(a) {
  for (let i = 0; i < a; i++) {
    b += arr[i] ** 3;
  }
  console.log(b);
}

cube(2);

// Как не задавая массив ввести число, чтобы оно было стало длиной этого массива? Кажется я опять усложнил сильно...