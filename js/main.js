/* 1) to count given degree*/

namesFunctions = ['degreeCount', 'arrayCount', 'toBig', 'toSmall', 'arithmeticMean'];

function battonClick(formRow) {
    resultDegree = document.getElementById('resultDegree');
    row = formRow.givenData.value;
    getdegree = formRow.degree.value;
    resultOutput = document.getElementById('functionsResult');

    document.getElementById('createButtons').style.display = 'inline';
    row = row.split(',');
    getdegree = getdegree.split(',');
    for (i = 0; i < row.length; i++) {
        row[i] = parseInt(row[i]);
        getdegree[i] = parseInt(getdegree[i]);
    }
}


degreeCount = function () {
    a = Math.pow(row, getdegree);
    resultOutput.innerHTML = a;
}


/* 2)  found number on Fibom  */

/* 3)  count an array's elements summ */

function arrayCount() {
    toArrey = row;
    if (toArrey.length < 2) {
        resultOutput.innerHTML = false;
    } else {
        resultOutput.innerHTML = Array.isArray(toArrey);
    }

}

/* 4)  sort an array
       4.1) from smaller to bigger
       4.2) from bigger to smaller
 */
//4.1
toBig = function () {

    var numbers = row;
    numbers.sort(function (a, b) {
        return a - b;
    });
    resultOutput.innerHTML = numbers;

}
//4.2
toSmall = function () {

    var numbers = row;
    numbers.sort(function (a, b) {
        return b - a;
    });
    resultOutput.innerHTML = numbers;

}
/* 5)  arithmetic mean */
arithmeticMean = function () {
    var numbers = row;
    arMean = 0;
    for (i = 0; i < numbers.length; i++) {
        arMean = numbers[i] + arMean;
    }
    arMean = arMean / numbers.length;
    resultOutput.innerHTML = arMean;
}
/* 6)  to count an amount repeat numbers of an array's elements*/
/* 7)  implement the reverse function */
/* 8)  to show odd numbers of an array */
oddNumb = function () {
    var numbers = row;
    var oddnumbers = [];
    var oddN = 0;
    for (i = 0; i < numbers.length; i++) {
        oddN = numbers[i] % 2;
        if (oddN != 0) {
            oddnumbers.push(numbers[i]);
        } else {
            continue;
        }
    }
    resultOutput.innerHTML = oddnumbers;

}
namesFunctions.push('oddNumb');
/* 9)  to find en element in an array and implement binar search */
/* 10) to find maximum divider for all numbers of an array */
maxDivider = function () {
    var numbers = row;
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
            } else {
                divNumbs[i] = numbers[i];
            }
            divN = divN - 1;
        }

    }
    console.log(divNumbs);
    resultOutput.innerHTML = divNumbs;
}
namesFunctions.push('maxDivider');
/* 11) to raise array's elements to given degree */

arrayDegree = function () {
    var number = row;
    var degrees = getdegree;
    var donned = [];
    for(i=0;i<number.length;i++){
        donned[i] = Math.pow(number[i], degrees[i]);

    }
    resultOutput.innerHTML = donned;

}
namesFunctions.push('arrayDegree');

// что тут не так?
/*            arrayDegree = function () {
                var number = row;
                var degrees = getdegree;


                toDegree = function (numb, degree) {
                    donned = Math.pow(numb, numb);
                    return donned;
                }
                for (i = 0; i < number.length; i++) {
                    powered[i] = toDegree(number[i], degrees[i]);

                }
            }
*/


/* 12) ??? specify */
/* 13) is an array of palindrome*/
/* 14) to show even numbers of an array */
/* 15) remainder operator
       15.1) array's numbers with remainder
       16.1 without remainder*/
/* 17) to put randomly array's elements */


//Создание кнопок
function createButton() {


    for (i = 0; i < namesFunctions.length; i++) {
        var input = document.createElement('input');
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        input.type = "button";
        input.value = namesFunctions[i];
        //input.onclick = buttName();
        input.setAttribute("onclick", "" + namesFunctions[i] + "()");

        document.getElementById('createButtons').appendChild(br);
        document.getElementById('createButtons').appendChild(input);
        document.getElementById('createButtons').appendChild(br2);
    }

    //document.getElementById('createButton').style.display = 'none';
    //buttonIn = '<input type="button" name="batton" id="batton" value="'+buttName+'" onclick="'+buttName+'()">';
    //document.write(namesFunctions[0]);
}
