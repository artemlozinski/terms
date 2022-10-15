// Делаем срезы
// Дана строка. Сначала выведите третий символ этой строки.
// Во второй строке выведите предпоследний символ этой строки.
// В третьей строке выведите первые пять символов этой строки.
// В четвертой строке выведите всю строку, кроме последних двух символов.
// В пятой строке выведите все символы с четными индексами (считая, что индексация начинается с 0, поэтому символы выводятся начиная с первого).
// В шестой строке выведите все символы с нечетными индексами, то есть начиная со второго символа строки.
// В седьмой строке выведите все символы в обратном порядке.
// В восьмой строке выведите все символы строки через один в обратном порядке, начиная с последнего.
// В девятой строке выведите длину данной строки.

const string = "Abrakadabra";

console.log(string.at(2));
console.log(string.at(-2));
console.log(string.slice(0, 5));
console.log(string.slice(0, 9));

function honest(a) {
  let b = "";
  for (let i = 0; i < a.length; i += 2) {
      b += string[i];
  }
  return b;
}
console.log(honest(string));

function odd(a) {
  let b = "";
  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      b += string[i];
    }
  }
  return b;
}
console.log(odd(string));

function reverse(a) {
  let b = "";
  const arr = Array.from(a);
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    b += arr[i];
  }
  return b;
}
console.log(reverse(string));

function revHon(a) {
  let b = "";
  const arr = Array.from(a);
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      b += arr[i];
    }
  }
  return b;
}
console.log(revHon(string));

console.log(string.length);
