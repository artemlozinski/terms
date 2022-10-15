// Второе вхождение
// Дана строка. Найдите в этой строке второе вхождение буквы f, и выведите индекс этого вхождения.
// Если буква f в данной строке встречается только один раз, выведите число -1, а если не встречается ни разу, выведите число -2.

// function sec(a) {
//   let arr = Array.from(a);
//   const b = "f"
//   for (let i = 0; i < arr.length; i++) {

//     } 
//   }

// console.log(sec("coffee"));

function last(a) {
    return (a.indexOf("f", a.indexOf("f") + 1))
}

console.log(last("coee"))