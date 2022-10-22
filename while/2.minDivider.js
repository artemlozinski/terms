// Минимальный делитель
// Дано целое число, не меньшее 2. Выведите его наименьший натуральный делитель, отличный от 1.

function min(dividend) {
    let count = 2
    while (dividend % count !== 0) {
        count++
    } return count
}
console.log(min(15));
