// Ряд - 1
// Даны два целых числа A и B (при этом A ≤ B). Выведите все числа от A до B включительно.

const arr = []

function line(a, b) {
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    console.log(arr);
}

line(1, 10)