// Ряд - 2
// Даны два целых числа A и В. Выведите все числа от A до B включительно, в
// порядке возрастания, если A < B, или в порядке убывания в противном случае.

function line(a, b) {
  const arr = []
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    } console.log(arr);
  } else if (b < a) {
    for (let i = a; i >= b; i--) {
      arr.push(i);
    } console.log(arr);
  }
}
line(10, 1);
