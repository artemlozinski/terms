// Уникальные элементы
// Дан список. Выведите те его элементы, которые встречаются в списке только один раз.
// Элементы нужно выводить в том порядке, в котором они встречаются в списке.

function uniqueElements(arr) {
    let count = 0
    const arr1 = []
    for (let i = 0; i < arr.length; i++) {
        for (let e = 0; e < arr.length; e++) {
            if (arr[i] === arr[e] && e !== i) {
                count++
            }
        }
        if (count === 0) {
            arr1.push(arr[i])
        }
        count = 0
    } return arr1
}

console.log(uniqueElements([1,2,2,3,3,3,4]));