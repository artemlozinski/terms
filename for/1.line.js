// Ряд - 1
// Даны два целых числа A и B (при этом A ≤ B). Выведите все числа от A до B включительно.

function line(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}

line(1, 10)