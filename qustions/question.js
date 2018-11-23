var arr = [1,2,3,4,5,6,7,8,9,10];
// Функции сортировки
function sIncrease(i, ii) { // По возрастанию
    if (i > ii)
        return 1;
    else if (i < ii)
        return -1;
    else
        return 0;
}
function sDecrease(i, ii) { // По убыванию
    if (i > ii)
        return -1;
    else if (i < ii)
        return 1;
    else
        return 0;
}
function sRand() { // Случайная
    return Math.random() > 0.5 ? 1 : -1;
}
arr.sort(sIncrease); // Вернет [1,2,3,4,5,6,7,8,9,10]
arr.sort(sDecrease); // Вернет [10,9,8,7,6,5,4,3,2,1]
arr.sort(sRand); // Вернет случайно отсортированный массив, например [1,10,3,4,8,6,9,2,7,5]

// как это блять работает?




//2

var numbers = row.split(',');
numbers.sort(function(a, b) {
    return a - b;
});