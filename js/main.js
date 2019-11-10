/* 1) to count given degree*/

let row = [];
let degree = []; // тут можно просто degree, если ты пишешь get, следовательно ожидается что ты хочешь что-то с него взять
let namesFunctions = [];
let rudeRow = [];
let check = true;

function buttonClick(formRow) {

  //get data from input
  row = formRow.givenData.value.split(',');
  rudeRow = formRow.givenData.value.split(',');
  degree = formRow.degree.value.split(',');

  // filters
  //check for wrong data

  let checkRow = true;
  row.map(function (val) {
    checkRow = !Number.isNaN(val);
  });

  let checkDegree = true;
  for (let i = 0; i < degree.length; i++) {
    if (Number.isNaN(degree[i])) {
      checkDegree = false;
      break;
    }
    else {
      checkDegree = true;
    }
  }

  if (checkRow === false || checkDegree === false) {
    check = false;
    alert("Введите пожалуйста число");
  } else {
    check = true;
    row = row || row[0]++;
    degree = degree || degree[0]++;
  }
  // val to a num
  for (let i = 0; i < row.length; i++) {
    row[i] = parseInt(row[i]);
    degree[i] = parseInt(degree[i]);
  }
  // remove NaN
  row = row.filter(Number);
  degree = degree.filter(Number);
}

let resultOuter = function (nameObj) {
  let htmlOut = [];
  let answer = document.getElementById(nameObj.name).childNodes[0].childNodes[1];
  let fail = document.getElementById(nameObj.name).childNodes[0].childNodes[5];

  htmlOut.push(answer);
  htmlOut.push(fail);

  return htmlOut;
}

//is arrays
let isArr = function () {
  buttonClick(formRow);
  let out = resultOuter(isArrObj);

  if (check === true && row.length < 2) {
      out[0].innerHTML = 'Не масив.';
    } else {
    out[0].innerHTML = "Массив.";
  }
}

let isArrObj = {
  name: isArr.name,
  buttonDesc: "Массив",
  failureDesc: "Введите пожалуйста массив.",
  description: "Проверка, являются ли данные массивом."
};
namesFunctions.push(isArrObj);

/* 1) count a numb in a given degree*/

let degreeCount = function () {
  buttonClick(formRow);
  let out = resultOuter(degreeCountObj);

  if (check === true && row.length >= 2 || degree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    out[0].innerHTML = Math.pow(row[0] || 0, degree[0] || 0);
    out[1].setAttribute("class", "trueP");
  }
}

let degreeCountObj = {
  name: degreeCount.name,
  buttonDesc: "Степень",
  failureDesc: "Введите пожалуйста по <b>одному</b> числу в каждую строку",
  description: "Возведение заданного числа в заданную степень"
};
namesFunctions.push(degreeCountObj);


/* 2)  found number on Fibom  ?*/
let fibonacci = function () {
  buttonClick(formRow);
  let out = resultOuter(fibonacciObj);

  if (row.length <= 1 || row.length >= 3 || degree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    let step1 = row[0] || 1;
    let step2 = row[1] || 1;
    let length = degree[0] || 3;
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

    out[0].innerHTML = result;
    out[1].setAttribute("class", "trueP");
  }
}

let fibonacciObj = {
  name: "fibonacci",
  buttonDesc: "Фибоначи",
  failureDesc: "Введите два начальных числа в первое поле ввода и длину во второе.",
  description: "Нахождение числа по фибоначи."
};
namesFunctions.push(fibonacciObj);

/* 3)  count an array's elements summ */
let arrSum = function () {
  buttonClick(formRow);
  let out = resultOuter(arrSumObj);

  if (row.length <= 1) {
    out[1].setAttribute("class", "falseP");
  } else {
    let answer = 0;

    for (let i = 0; i < row.length; i++) {
      answer = answer + row[i];
    }
    out[0].innerHTML = answer;
    out[1].setAttribute("class", "trueP");
  }
}

let arrSumObj = {
  name: "arrSum",
  buttonDesc: "Сумма чисел",
  failureDesc: "Введите несколько значений в первую строку.",
  description: "Нахождение суммы чисел элементов массива."
};
namesFunctions.push(arrSumObj);

/* 4)  sort an array
       4.1) from smaller to bigger
       4.2) from bigger to smaller
 */
// 4.1
let toBig = function () {
  buttonClick(formRow);
  let out = resultOuter(toBigObj);

  if (row.length < 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    let numbers = row.slice();
    numbers.sort(function (a, b) {
      return a - b;
    });
    out[0].innerHTML = numbers;
    out[1].setAttribute("class", "trueP");
  }
}

let toBigObj = {
  name: "toBig",
  buttonDesc: "От меньшего",
  failureDesc: "Введите несколько значений в первое поле.",
  description: "Сортировка данных от меньшего к большему"
};
namesFunctions.push(toBigObj);

// 4.2
let toSmall = function () {
  buttonClick(formRow);
  let out = resultOuter(toSmallObj);
  let numbers = row.slice();

  numbers.sort(function (a, b) {
    return b - a;
  });

  out[0].innerHTML = numbers;
}

let toSmallObj = {
  name: "toSmall",
  buttonDesc: "От большего",
  failureDesc: "Вы ввели некоректные данные.",
  description: "Сортировка данных от большего к меньшему."
};
namesFunctions.push(toSmallObj);

/* 5)  arithmetic mean  */
let arithmeticMean = function () {
  buttonClick(formRow);
  let out = resultOuter(arithmeticMeanObj);
  let numbers = row.slice();
  let arMean = 0;

  for (let i = 0; i < numbers.length; i++) {
    arMean = numbers[i] + arMean;
  }
  arMean = arMean / numbers.length;
  out[0].innerHTML = arMean;
}

let arithmeticMeanObj = {
  name: "arithmeticMean",
  buttonDesc: "Средн.знач.",
  failureDesc: "Вы ввели некоректные данные.",
  description: "Нахождение среднего арифметического значения чисел массива."
};
namesFunctions.push(arithmeticMeanObj);

/* 6)  to count an amount repeat numbers of an array's elements*/
let repeatNumbers = function () {
  buttonClick(formRow);
  let out = resultOuter(repeatNumbersObj);
  let repeated = row.slice().sort();
  let counter = [];
  let count = 0;
  let numb = [];
  let result = [];

  for (let i = 0; i < repeated.length; i++) {
    if (repeated[i] !== count) {
      numb.push(repeated[i]);
      counter.push(1);
    } else {
      counter[counter.length - 1]++;
    }
    count = repeated[i];
  }

  for (let i = 0; i < numb.length; i++) {
    count = ' ' + numb[i] + ' (' + counter[i] + ')';
    result.push(count);
  }

  out[0].innerHTML = result;
}

let repeatNumbersObj = {
  name: "repeatNumbers",
  buttonDesc: "Повтор. знач.",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Нахождение повторяющихся значений массива и их количества."
};
namesFunctions.push(repeatNumbersObj);

/* 7)  implement the reverse function */

let revFunction = function () {
  buttonClick(formRow);
  let out = resultOuter(revFunctionObj);
  out[0].innerHTML = row.slice().reverse();
}

let revFunctionObj = {
  name: "revFunction",
  buttonDesc: "Реверс",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Реверс значений массива."
};
namesFunctions.push(revFunctionObj);

/* 8)  to show odd numbers of an array */
let oddNumb = function () {
  buttonClick(formRow);

  let out = resultOuter(oddNumbObj);
  let oddnumbers = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i] % 2 !== 0) oddnumbers.push(row[i]);
  }

  out[0].innerHTML = oddnumbers;
}

let oddNumbObj = {
  name: "oddNumb",
  buttonDesc: "Нечетные",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Вывод нечетных значений массива."
};
namesFunctions.push(oddNumbObj);

/* 11) to raise array's elements to given degree */

let arrayDegree = function () {
  buttonClick(formRow);
  let out = resultOuter(arrayDegreeObj);

  if (degree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    out[0].innerHTML = row.map(val => Math.pow(val, degree[0] || 0));
    out[1].setAttribute("class", "trueP");
  }
}

let arrayDegreeObj = {
  name: "arrayDegree",
  buttonDesc: "Степени",
  failureDesc: "Введите <b>одно</b> значение в поле доп. данных.",
  description: "Возведение значений массива в заданную степень."
};
namesFunctions.push(arrayDegreeObj);

/* 13) is an array of palindrome*/
let palindrome = function () {
  buttonClick(formRow);
  let out = resultOuter(palindromeObj);
  let answer;
  let reversed = row.slice().reverse();

  for (let i = 0; i < row.length; i++) {
    if (reversed[i] !== row[i]) {
      answer = 'не палиндром';
      break;
    } else {
      answer = 'Палиндром';
    }
  }

  out[0].innerHTML = answer;
}

let palindromeObj = {
  name: "palindrome",
  buttonDesc: "Палиндром",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Проверка, является ли данный массив палиндромом."
};
namesFunctions.push(palindromeObj);

/* 14) to show even numbers of an array */
let evenNumbers = function () {
  buttonClick(formRow);
  let out = resultOuter(evenNumbersObj);
  let evenNumbs = [];

  for (let i = 0; i <= row.length; i++) {
    if (row[i] % 2 === 0) {
      evenNumbs.push(row[i]);
    }
  }
  out[0].innerHTML = evenNumbs;
}

let evenNumbersObj = {
  name: "evenNumbers",
  buttonDesc: "Четные числа",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Выведение четных чисел массива."
};
namesFunctions.push(evenNumbersObj);

/* 15) remainder operator
       15.1) array's numbers with remainder*/
let noRemainder = function () {
  buttonClick(formRow);
  let out = resultOuter(noRemainderObj);

  if (degree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    out[0].innerHTML = row.filter(val => val % degree[0] === 0);
    out[1].setAttribute("class", "trueP");
  }
}

let noRemainderObj = {
  name: "noRemainder",
  buttonDesc: "Без остатка",
  failureDesc: "Введите <b>одно</b> значение в доп. поле.",
  description: "Введите одно значение в доп. поле на которые данные из масива будут делиться без остатка."
};
namesFunctions.push(noRemainderObj);

/* 16.1 without remainder*/

let withRemainder = function () {
  buttonClick(formRow);
  let out = resultOuter(withRemainderObj);

  if (degree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    out[0].innerText = row.filter(val => val % degree[0] !== 0);
    out[1].setAttribute("class", "trueP");
  }
}

let withRemainderObj = {
  name: "withRemainder",
  buttonDesc: "Остаток",
  failureDesc: "Введите <b>одно</b> значение в доп. поле.",
  description: "Введите одно значение в доп. поле на которые данные из масива будут делиться с остатком."
};
namesFunctions.push(withRemainderObj);
/* 17) to put randomly array's elements */

// Создание кнопок
function createButton() {
  for (let i = 0; i < namesFunctions.length; i++) {
    let divButt = document.createElement('div');
    divButt.setAttribute("class", "divButt");

    document.getElementById('buttOut').appendChild(divButt).innerHTML = `
    <input id="${namesFunctions[i].name}"; class="buttonFunsc" type="button" value=" ${namesFunctions[i].buttonDesc} "onclick="${namesFunctions[i].name}()">`;

    let pp = document.createElement('div'); // what is pp?
    pp.setAttribute("id", namesFunctions[i].name);
    let html2 = "<div class=\"item\"> <h1> Вывод резултата </h1>";
    html2 += " <div class=\"descr\">" + namesFunctions[i].description + "</div>\n";
    html2 += "<p>" + namesFunctions[i].failureDesc + "</p></div>";

    document.getElementById('buttons').appendChild(pp).innerHTML = html2;
  }
}
