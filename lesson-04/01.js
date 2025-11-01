/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве.
Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

let arrayNum = [1, 2, 3, 4, 5];

function includesElement(array, elem) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            console.log("Array " + array + " have this element: " + elem);
            return true;
        }
    }
    return false
}

let result = includesElement(arrayNum, 5);
console.log(result)
