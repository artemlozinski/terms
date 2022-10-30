// Переставить соседние
// Переставьте соседние элементы списка (A[0] c A[1], A[2] c A[3] и т. д.).
// Если элементов нечетное число, то последний элемент остается на своем месте.

function change(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      array.push(arr[i + 1], arr[i]);
      
    } if (i + 1 === arr.length) {
        array.push(arr[i])
      }
  }
  return array;
}

console.log(change([1, 2, 3, 4, 5,6]));


// Сначала сделать сравнение, а потом заходить в цикл, т к слишком много итераций