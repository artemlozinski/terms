// Вставить элемент
// Дан список целых чисел, число k и значение C. Необходимо вставить в список на позицию с индексом k элемент,
// равный C, сдвинув все элементы, имевшие индекс не менее k, вправо.

function addElement(arr, index, element) {
    arr.splice(index, 0, element)
    return arr
}

console.log(addElement([7, 6, 5, 4, 3, 2, 1], 2, 0));