// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {

    return (a > b && a > c) ? a : (b > a && b > c) ? b : c;
}

let result = findLargest(7, 8, 43);

console.log(result);
