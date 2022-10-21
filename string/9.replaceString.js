// Замена подстроки
// Дана строка. Замените в этой строке все цифры 1 на слово one.

function replace(str, element) {
    return str.replaceAll("1", element);
}

console.log(replace("1213141516171819101", "one"));