// Соседи одного знака
// Дан список чисел. Если в нем есть два соседних элемента одного знака, выведите эти числа.
// Если соседних элементов одного знака нет — не выводите ничего. Если таких пар соседей несколько — выведите первую пару.

function neighborSame(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i + 1] > 0) {
      return [array[i], array[i + 1]];
    } else if (array[i] < 0 && array[i + 1] < 0) {
      return [array[i], array[i + 1]];
    }
  }
}

console.log(neighborSame([-1, -2, 3, 1, -2]));
