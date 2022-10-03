// Знак числа   Условие: Для данного числа x выведите значение sign(x)

function sign(x) {
  let result;
  if (x > 0) {
    result = x = 1;
  } else if (x < 0) {
    result = x = -1;
  } else if (x == 0) {
    result = x = 0;
  }
  return result;
}

console.log(sign(0));
