// Ряд - 2
// Даны два целых числа A и В. Выведите все числа от A до B включительно, в
// порядке возрастания, если A < B, или в порядке убывания в противном случае.

function line(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else if (b < a) {
    for (let i = a; i >= b; i--) {
      console.log(i);
    }
  }
}
line(10, 1);
