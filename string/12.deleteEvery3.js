// Удалить каждый третий символ
// Дана строка. Удалите из нее все символы, чьи индексы делятся на 3.

function delEvery3(str) {
    let cured = ""
    for (let i = 0; i < str.length; i++) {
        if (i % 3 !== 0) {
            cured += str[i]
        }
    } return cured
}

console.log(delEvery3("Python"));