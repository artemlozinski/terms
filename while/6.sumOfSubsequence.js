// Сумма последовательности
// Определите сумму всех элементов последовательности, завершающейся числом 0.
// В этой и во всех следующих задачах числа, следующие за первым нулем, учитывать не нужно.

const arr = []

function sum(arr) {
    let sum = 0
    let i = 0
    while (arr[i] !== 0) {
        sum += arr[i]
        i++
    } return sum
}

console.log(sum([1, 7, 9, 0]));