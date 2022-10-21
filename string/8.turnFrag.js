// Обращение фрагмента
// Дана строка, в которой буква h встречается как минимум два раза
// Разверните последовательность символов,
// заключенную между первым и последним появлением буквы h, в противоположном порядке.

function reverseSeg(str, element) {
  let start = str.indexOf(element);
  let end;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      end = i;
    }
  }
  let toReverse = str.slice(start, end);
  let arrRev = Array.from(toReverse);
  arrRev.reverse();
  let reversed = "";
  for (let i = 0; i < arrRev.length; i++) {
    reversed += arrRev[i];
  }
  return str.slice(0, start + 1) + reversed + str.slice(end + 1);
}
console.log(reverseSeg("qwertyhasdfghzxcvb", "h"));
