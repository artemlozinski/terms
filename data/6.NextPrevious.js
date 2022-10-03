// Следующее и предыдущее
// Напишите программу, которая считывает целое число и выводит текст, аналогичный приведенному в примере (пробелы важны!).

function np(f) {
  const next = f + 1;
  const previous = f - 1;
  return (
    "The next number for the number " +
    f +
    " is " +
    next +
    ". " +
    "The previous number for the number " +
    f +
    " is " +
    previous +
    "."
  );
}
console.log(np(1500));
