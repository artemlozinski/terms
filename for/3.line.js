// Ряд - 3
// Даны два целых числа A и В, A>B. Выведите все нечётные числа от A до B включительно,
// в порядке убывания. В этой задаче можно обойтись без инструкции if.

const arr = [];

function line(a, b) {
  for (let i = a - ((a + 1) % 2); i >= b - (b % 2); i -= 2) {
    arr.push(i);
  }
  console.log(arr);
}

line(-18, -29);
