// Ход ладьи
// Шахматная ладья ходит по горизонтали или вертикали. Даны две различные
// клетки шахматной доски, определите, может ли ладья попасть с первой клетки
// на вторую одним ходом. Программа получает на вход четыре числа от 1 до 8
// каждое, задающие номер столбца и номер строки сначала для первой клетки,
// потом для второй клетки. Программа должна вывести YES, если из первой
// клетки ходом ладьи можно попасть во вторую или NO в противном случае.

function king(a, b, c, d) {
  let x = Math.abs(a - c);
  let y = Math.abs(b - d);
  if (x === 1 || y === 1) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(king(1, 1, 1, 2));