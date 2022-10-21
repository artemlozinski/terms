// Удаление фрагмента
// Дана строка, в которой буква h встречается минимум два раза. Удалите из этой строки
// первое и последнее вхождение буквы h, а также все символы, находящиеся между ними.

function del(str, element) {
  let start = str.indexOf(element);
  let end;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      end = i
    }
  } 
  return str.slice(0, start) + str.slice(end + 1);
}

console.log(del("qwertyhasdfghzxcvb", "h"));
