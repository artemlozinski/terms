// Удаление символа
// Дана строка. Удалите из этой строки все символы @

function deleteSymbol(str, element) {
    return str.replaceAll(element, "")
}
console.log(deleteSymbol("@@@@@F@@@@KL@@@@@J@J@J@JJJH@JJKK@JJJ@JJ", "@"));