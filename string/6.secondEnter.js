// Второе вхождение
// Дана строка. Найдите в этой строке второе вхождение буквы f, и выведите индекс этого вхождения.
// Если буква f в данной строке встречается только один раз, выведите число -1, а если не встречается ни разу, выведите число -2.

function second(str, element) {
  let second = str.indexOf(element, str.indexOf(element) + 1);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      count += 1;
    }
  }
  if (count > 1) {
    return second;
  } else if (count === 1) {
    return -1;
  } else if (count === 0) {
    return -2;
  }
}

console.log(second("qwerty", "f"));
