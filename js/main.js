/* 1) to count given degree*/

let row = [];
let getdegree = [];
let notANaN = [];
let namesFunctions = [];

function battonClick(formRow) {

  resultOutput = document.getElementById('functionsResult');

  //get data from input
  row = formRow.givenData.value.split(',');
  getdegree = formRow.degree.value.split(',');
  let i = 0;

  //check for wrong data
  let check = false;

  row.map(function (val) {
    if (isNaN(val)) {
      check = true;
    }
  });

  for (j = 0; j < getdegree.length; j++) {
    if (isNaN(getdegree[j])) {
      check = true;
    }
  }

  if (check === true) {
    alert("Введите пожалуйста число");
    document.getElementById("createButtons").style.display = "none";
    resultOutput.innerHTML = "Ошибка!";
  } else {
    document.getElementById('createButtons').style.display = 'inline';
    row = row || row[0]++;
    getdegree = getdegree || getdegree[0]++;
  }


  // filters

  // val to a num
  for (i = 0; i < row.length; i++) {
    row[i] = parseInt(row[i]);
    getdegree[i] = parseInt(getdegree[i]);
  }
  // remoove NaN
  row = row.filter(Number);
  getdegree = getdegree.filter(Number);


}

//test data

let testFunc = function () {
  //let summarr = row.filter(val => isNaN(val));
  resultOutput.innerHTML = notANaN;
}
namesFunctions.push('testFunc');

//is array
let isArr = function () {
  toArrey = row;
  if (toArrey.length < 2) {
    resultOutput.innerHTML = false;
  } else {
    resultOutput.innerHTML = Array.isArray(toArrey);
  }

}
namesFunctions.push('isArr');


/* 1) count a numb in a given degree*/
degreeCount = function () {
  let a = Math.pow(row[0] || 1, getdegree[0] || 1);
  resultOutput.innerHTML = a;
}

namesFunctions.push('degreeCount');
/* 2)  found number on Fibom  ?*/
let fibon = function () {
  let step1 = row[0] || 1;
  let step2 = row[1] || 1;
  let length = getdegree[0] || 3;
  let a = step1;
  let b = step2;
  let n = length;
  let result = [];
  let i;
  for (i = 0; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    result.push(c);
  }
  resultOutput.innerHTML = result;
}
namesFunctions.push('fibon');

/* 3)  count an array's elements summ */
var arrSumm = function () {
  let i;
  let answer = 0;
  for (i = 0; i < row.length; i++) {
    answer = answer + row[i];
  }
  resultOutput.innerHTML = answer;
}
namesFunctions.push('arrSumm');
/* 4)  sort an array
       4.1) from smaller to bigger
       4.2) from bigger to smaller
 */
//4.1
let toBig = function () {

  var numbers = row.slice();
  numbers.sort(function (a, b) {
    return a - b;
  });
  resultOutput.innerHTML = numbers;

}
namesFunctions.push('toBig');
//4.2
let toSmall = function () {

  let numbers = row.slice();
  numbers.sort(function (a, b) {
    return b - a;
  });
  resultOutput.innerHTML = numbers;

};
namesFunctions.push('toSmall');

/* 5)  arithmetic mean  */
let arithmeticMean = function () {
  let numbers = row;
  let i;
  arMean = 0;
  for (i = 0; i < numbers.length; i++) {
    arMean = numbers[i] + arMean;
  }
  arMean = arMean / numbers.length;
  resultOutput.innerHTML = arMean;
}
namesFunctions.push('arithmeticMean');

/* 6)  to count an amount repeat numbers of an array's elements*/
// http://qaru.site/questions/49329/counting-the-occurrences-frequency-of-array-elements
let repeatNumbers;
repeatNumbers = function () {
  let repeated = row.slice().sort();
  let counter = [];
  let count = 0;
  let numb = [];
  let result = [];
  let i;
  for (i = 0; i < repeated.length; i++) {
    if (repeated[i] !== count) {
      numb.push(repeated[i]);
      counter.push(1);
    } else {
      counter[counter.length - 1]++;
    }
    count = repeated[i];
  }
  for (i = 0; i < numb.length; i++) {
    count = ' ' + numb[i] + ' (' + counter[i] + ')';
    result.push(count);
  }

  resultOutput.innerHTML = result;
}
namesFunctions.push('repeatNumbers');

/* 7)  implement the reverse function */

var revFunction = function () {
  let reversed = row.slice().reverse();
  resultOutput.innerHTML = reversed;
}
namesFunctions.push('revFunction');
/* 8)  to show odd numbers of an array */
oddNumb = function () {
  let i;
  let oddnumbers = [];
  for (i = 0; i < row.length; i++) {
    if (row[i] % 2 != 0) oddnumbers.push(row[i]);
  }
  resultOutput.innerHTML = oddnumbers;
}
namesFunctions.push('oddNumb');
/* 9)  to find en element in an array and implement binar search */

/* 10) to find maximum divider for all numbers of an array */
/*
maxDivider = function () {

}
namesFunctions.push('maxDivider');
*/
/* 11) to raise array's elements to given degree */

var arrayDegree;
arrayDegree = function () {
  let deg = row.map(val => Math.pow(val, getdegree[0] || 1));
  resultOutput.innerHTML = deg;
}

namesFunctions.push('arrayDegree');


/* 12) ??? specify */
/* 13) is an array of palindrome*/

var palindr = function () {
  let answer;
  let i;
  let reversed = row.slice().reverse();
  for (i = 0; i < row.length; i++) {
    if (reversed[i] != row[i]) {
      answer = 'не палиндром';
    } else {
      answer = 'Палиндром';
    }
  }

  resultOutput.innerHTML = answer;
}
namesFunctions.push('palindr');

/* 14) to show even numbers of an array */
evenNumbers = function () {
  let evenNumbs = [];
  let i;
  for (i = 0; i <= row.length; i++) {
    if (row[i] % 2 == 0) {
      evenNumbs.push(row[i]);
    } else {
      continue
    }
  }
  resultOutput.innerHTML = evenNumbs;
}
namesFunctions.push('evenNumbers');

/* 15) remainder operator
       15.1) array's numbers with remainder*/

var noRemainder = function () {

  let answer = row.filter(val => val % getdegree[0] == 0)
  resultOutput.innerHTML = answer;
}
namesFunctions.push('noRemainder');

/* 16.1 without remainder*/


var withRemainder = function () {

  let answer = row.filter(val => val % getdegree[0] !== 0);
  resultOutput.innerText = answer;
}
namesFunctions.push('withRemainder');
/* 17) to put randomly array's elements */


//Создание кнопок
function createButton() {
  let i = 0;

  for (i = 0; i < namesFunctions.length; i++) {
    let input = document.createElement('input');
    let br = document.createElement('br');
    let br2 = document.createElement('br');
    input.type = "button";
    input.value = i + " " + namesFunctions[i];
    //input.onclick = buttName();
    input.setAttribute("onclick", namesFunctions[i] + "()");

    document.getElementById('createButtons').appendChild(br);
    document.getElementById('createButtons').appendChild(input);
    document.getElementById('createButtons').appendChild(br2);
  }
}
//s