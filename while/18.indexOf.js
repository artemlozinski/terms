function ind(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i
        }
    }
}

console.log(ind([1,2,3,4,5], 3));