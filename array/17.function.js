// function honest(f, a) {
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (i % 2 === 0) {
//       arr.push(a[i]);
//       arr[i] = f(a[i]);
//     }
//   }
//   return arr;
// }
// const f = function (a) {
//   return a + a;
// };
// const num = [1, 2, 3, 4, 5];
// const sqr = honest(f, num);
// console.log(sqr);


function honest(f, a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        arr[i] = f(a[i]);
    }
    return arr;
  }
  const f = function (a) {
    return a + a;
  };
  const num = [1, 2, 3, 4, 5];
  const sqr = honest(f, num);
  console.log(sqr);
  