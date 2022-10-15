// Удаление фрагмента
// Дана строка, в которой буква h встречается минимум два раза. Удалите из этой строки
// первое и последнее вхождение буквы h, а также все символы, находящиеся между ними.

function del(a) {
  let arr = Array.from(a);
  const h = "h";
  const b = arr.indexof(h);
  const c = arr.lastindexof(h);
  if (a.startswith("h")) {
    d = a.slice(0, b);
  }
  if (a.endwith("h")) {
    e = a.slice(c);
  }
  return d + e;
}

console.log(del("qwertyhasdfghzxcvb"));
