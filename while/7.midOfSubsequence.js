// Среднее значение последовательности
// Определите среднее значение всех элементов последовательности, завершающейся числом 0.

const arr = []

function mid(arr) {
    let i = 0
    let sum = 0
    while (arr[i] !== 0) {
        sum += arr[i]
        i++
    } return sum / i
}

console.log(mid([1, 7, 9, 0]));