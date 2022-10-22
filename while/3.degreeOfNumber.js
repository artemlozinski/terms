// Степень двойки
// По данному натуральному числу N найдите наибольшую целую степень двойки, не превосходящую N.
// Выведите показатель степени и саму степень. Операцией возведения в степень пользоваться нельзя!

function degree(num) {
  let count = 0;
  let two = 2;
  while (two <= num) {
    two *= 2;
    count += 1;
  }
  return count +  " " + 2 ** count;
}

console.log(degree(10));
