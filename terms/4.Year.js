// Високосный год Условие:
//Дано натуральное число. Требуется определить, является ли год с данным
//номером високосным. Если год является високосным, то выведите YES, иначе
//выведите NO. Напомним, что в соответствии с григорианским календарем, год
//является високосным, если его номер кратен 4, но не кратен 100, а также если он кратен 400.

function year(y) {
  let result;
  if (y % 400 === 0) {
    result = "yes";
  } else if (y % 100 === 0) {
    result = "no";
  } else if (y % 4 === 0) {
    result = "yes";
  } else {
    result = "no";
  }
  return result;
}

console.log(year(2000));
