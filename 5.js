//1.
// написать функцию, которая принимает число и возвращает массив случайных чисел, 
// длина массива равна числу которое мы передали

// Добавить параметр функции который отвечает за максимальное случайное значение
// В итоге должно быть 2 параметра: первый - длина массива, второй - максимальное случайное значение

function constructRandomArray (length, limit) {
    let randomArray = []
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random()*limit))
    }
    return randomArray;
}
const arr1 = constructRandomArray(14, 100);
// написать функцию которая принимает массив чисел, проходит по нему, и выводит в консоль слово в зависимости от значения
// если число делится на 3 без остатка - то мы выводим "Fizz"
// ecли делится на 5 без остатка - то мы выводим "Buzz"
// если делится и на 3 и на 5 - то мы выводим "FizzBuzz"
// если ни одно из этих условий не выполняется то выводим само число


function fizzBuzz(arr) {
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 15 === 0) {

        }
        if (arr[i] % 3 === 0) {

        }
        // else if (arr[i] % 3 === 0) {

        // } else if (arr[i] % 5 === 0) {

        // } else {

        // }
    }
    return resultedArray;

}

fizzBuzz(arr1)
