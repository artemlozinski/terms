// Потерянная карточка
// Для настольной игры используются карточки с номерами от 1 до N.
// Одна карточка потерялась. Найдите ее, зная номера оставшихся карточек.
// Дано число N, далее N − 1 номер оставшихся карточек (различные числа от 1 до N).
// Программа должна вывести номер потерянной карточки.
// Для самых умных: массивами и аналогичными структурами данных пользоваться нельзя.

function lost(a, b, c, d, e) {
  let sum1 = 0;
  let sum2 = b + c + d + e;
  for (let i = 1; i <= a; i++) {
    sum1 += i;
  }
  console.log(sum1 - sum2);
}

lost(5, 3, 5, 2, 1);
