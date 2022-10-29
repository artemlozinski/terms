// Переставить min и max
// В списке все элементы различны. Поменяйте местами минимальный и максимальный элемент этого списка.

function changeMN(arr) {
  let imax = 0;
  let imin = 0;
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[imax]) {
      imax = i;
      max=arr[imax]
    }
    if (arr[i] < arr[imin]) {
      imin = i;
    }
  }
  arr[imax] = arr[imin]
  arr[imin]= max
//   arr.splice(max, 1, arr[min]);
//   arr.splice(min, 1, arr[max]);
  return arr
}

console.log(changeMN([3, 4, 5, 2, 1]));
