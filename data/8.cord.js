// Шнурки
// Обувная фабрика собирается начать выпуск элитной модели ботинок. Дырочки для шнуровки будут расположены в два ряда,
// расстояние между рядами равно a, а расстояние между дырочками в ряду b. Количество дырочек в каждом ряду равно N.
// Шнуровка должна происходить элитным способом “наверх, по горизонтали в другой ряд, наверх, по горизонтали и т.д.” (см. рисунок).
// Кроме того, чтобы шнурки можно было завязать элитным бантиком, длина свободного конца шнурка должна быть l.
// Какова должна быть длина шнурка для этих ботинок?
// Программа получает на вход четыре натуральных числа a, b, l и N - именно в таком порядке - и должна вывести одно число - искомую длину шнурка.

function cord(a, b, l, N) {
  return 2 * l + (N * 2 - 1) * a + (N - 1) * 2 * b;
}

console.log(cord(100, 10, 98, 99));
