// Ряд - 3
// Даны два целых числа A и В, A>B. Выведите все нечётные числа от A до B включительно,
// в порядке убывания. В этой задаче можно обойтись без инструкции if.

function line(a, b) {
  for (let i = a; i >= b; i--) {
    for (let e = i; e % 2 !== 0; e++) {
      console.log(e);
    }
  }
}

line(-18, -29);
