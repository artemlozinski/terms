// Дана строка, состоящая из слов, разделенных пробелами. Определите, сколько в ней слов. 

function count(str) {
    const arr = str.split(' ')
    return arr.length
}

console.log(count("Hello world"));