// Замена внутри фрагмента
// Дана строка. Замените в этой строке все появления буквы h на букву H, кроме первого и последнего вхождения.   

function replace(str, element) {
    let start = str.indexOf(element);
    let end;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === element) {
        end = i
      }
    } 
    let segment = str.slice(start + 1, end)
    return str.slice(0, start + 1) + segment.replaceAll(element, "H") + str.slice(end);
}
console.log(replace("qwertyhahsdhfghzxcvb", "h"));