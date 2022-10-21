// Первое и последнее вхождения
// Дана строка. Если в этой строке буква f встречается только один раз, выведите её индекс.
// Если она встречается два и более раз, выведите индекс её первого и последнего появления.
// Если буква f в данной строке не встречается, ничего не выводите.

function firstLast(str, element) {
  let start = str.indexOf(element);
  let end = str.lastIndexOf(element);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      count += 1;
    }
  }
  if (count === 0) {
    return "Нет такой буквы";
  } else if (count === 1) {
    return start;
  } else if (count > 1) {
    return start + " " + end;
  }
}
console.log(firstLast("comfffffort", "f"));
