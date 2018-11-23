var numbers = [5, 3, 4, 5, 6, 7, 8, 9, 10];
var divNumbs = [];
var divN = 0;
var dividC = 0;
for (i = 0; i < numbers.length; i++) {
    divN = numbers[i] - 1;
    for (j = divN; j >= 1; j--) {

        dividC = numbers[i] / divN;

        if (dividC == 2) {
            divNumbs[i] = divN;
            break;
        }else {
            divNumbs[i] = numbers[i];
        }
        divN = divN - 1;
    }

}


var test = 0;
for (j = divN; j <= 1; j--) {
    dividC = numbers[0] / j;
    if (dividC == 1) {
        test = divN;
        break;
    }
}
console.log(test);


var numbers = [5, 3, 4, 5, 6, 7, 8, 9, 10];
var divN = numbers[0] - 1;
for (j = divN; j <= 1; j--) {
    dividC = numbers[0] / j;
    if (dividC == 1) {
        test = divN;
        document.write(test);
    }
}