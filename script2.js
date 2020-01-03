// 2. Напишите функцию - аналог Math.min().Функция 
// принимает любое количество чисел и возвращает меньшее из них:
// et 30 min;
// at 20 min

function min() {
    let a = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (a > arguments[i]) {
            a = arguments[i]
        }
    }
    return (a)
}
console.log(min(30, 1, 100, 500, 100500))