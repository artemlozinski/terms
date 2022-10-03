// Ход слона
// Шахматный слон ходит по диагонали. Даны две различные клетки шахматной
// доски, определите, может ли слон попасть с первой клетки на вторую одним ходом.

function bishop(a, b, c, d) {
    let x = a / b
    let y = c / d
    let x1 = a + b
    let y1 = c + d
    if ((x === y) || (x1 === y1)) {
        return "yes"
    } else {
        return "no"
    }
}

console.log(bishop(4, 4, 4, 3))