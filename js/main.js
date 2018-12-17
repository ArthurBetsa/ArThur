/* 1) to count given degree*/


let row = [];
let getdegree = [];
let namesFunctions = [];
let rudeRow = [];
let check = true;


function battonClick(formRow) {

  //get data from input
  row = formRow.givenData.value.split(',');
  rudeRow = formRow.givenData.value.split(',');
  getdegree = formRow.degree.value.split(',');
  let i;

  // filters
  //check for wrong data

  let checkRow = true;
  row.map(function (val) {
    if (isNaN(val)) {
      checkRow = false;
    } else {
      checkRow = true;
    }
  });

  let checkDegree = true;
  for (i = 0; i < getdegree.length; i++) {
    if (isNaN(getdegree[i])) {
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
    getdegree = getdegree || getdegree[0]++;
  }
  // val to a num
  for (i = 0; i < row.length; i++) {
    row[i] = parseInt(row[i]);
    getdegree[i] = parseInt(getdegree[i]);
  }
  // remoove NaN
  row = row.filter(Number);
  getdegree = getdegree.filter(Number);
}

let resultOuter = function (nameObj) {
  let htmlOut = [];
  let answer = document.getElementById(nameObj.name).childNodes[0].childNodes[1];
  let fail = document.getElementById(nameObj.name).childNodes[0].childNodes[5];
  htmlOut.push(answer);
  htmlOut.push(fail);
  return htmlOut;
}


//is array
let isArr = function () {
  battonClick(formRow);
  let out = resultOuter(isArrOb);
  if (check === true) {
    if (row.length < 2) {
      out[0].innerHTML = 'Не масив.';
    } else {
      out[0].innerHTML = "Массив.";
    }
  }


}
let isArrOb = {
  name: isArr.name,
  buttonDesc: "Массив",
  failureDesc: "Введите пожалуйста массив.",
  description: "Проверка, являются ли данные массивом."
};
namesFunctions.push(isArrOb);


/* 1) count a numb in a given degree*/

let degreeCount = function () {
  battonClick(formRow);
  let out = resultOuter(degreeCountOb);
  if (check === true) {
    if (row.length >= 2 || getdegree.length >= 2) {
      out[1].setAttribute("class", "falseP");
    } else {
      let powNumb = Math.pow(row[0] || 0, getdegree[0] || 0);
      out[0].innerHTML = powNumb;
      out[1].setAttribute("class", "trueP");
    }
  }
}
let degreeCountOb = {
  name: degreeCount.name,
  buttonDesc: "Степень",
  failureDesc: "Введите пожалуйста по <b>одному</b> числу в каждую строку",
  description: "Возведение заданного числа в заданную степень"
};
namesFunctions.push(degreeCountOb);


/* 2)  found number on Fibom  ?*/
let fibon = function () {
  battonClick(formRow);
  let out = resultOuter(fibonOb);
  if (row.length <= 1 || row.length >= 3 || getdegree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
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
    out[0].innerHTML = result;
    out[1].setAttribute("class", "trueP");
  }
}
let fibonOb = {
  name: "fibon",
  buttonDesc: "Фибоначи",
  failureDesc: "Введите два начальных числа в первое поле ввода и длину во второе.",
  description: "Нахождение числа по фибоначи."
};
namesFunctions.push(fibonOb);

/* 3)  count an array's elements summ */
let arrSumm = function () {
  battonClick(formRow);
  let out = resultOuter(arrSummOb);
  if (row.length <= 1) {
    out[1].setAttribute("class", "falseP");
  } else {
    let i;
    let answer = 0;
    for (i = 0; i < row.length; i++) {
      answer = answer + row[i];
    }
    out[0].innerHTML = answer;
    out[1].setAttribute("class", "trueP");
  }
}
let arrSummOb = {
  name: "arrSumm",
  buttonDesc: "Сумма чисел",
  failureDesc: "Введите несколько значений в первую строку.",
  description: "Нахождение суммы чисел элементов массива."
};
namesFunctions.push(arrSummOb);

/* 4)  sort an array
       4.1) from smaller to bigger
       4.2) from bigger to smaller
 */
//4.1
let toBig = function () {
  battonClick(formRow);
  let out = resultOuter(toBigOb);
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
let toBigOb = {
  name: "toBig",
  buttonDesc: "От меньшего",
  failureDesc: "Введите несколько значений в первое поле.",
  description: "Сортировка данных от меньшего к большему"
};
namesFunctions.push(toBigOb);

//4.2
let toSmall = function () {
  battonClick(formRow);
  let out = resultOuter(toSmallOb);
  let numbers = row.slice();
  numbers.sort(function (a, b) {
    return b - a;
  });
  out[0].innerHTML = numbers;
}
let toSmallOb = {
  name: "toSmall",
  buttonDesc: "От большего",
  failureDesc: "Вы ввели некоректные данные.",
  description: "Сортировка данных от большего к меньшему."
};
namesFunctions.push(toSmallOb);

/* 5)  arithmetic mean  */
let arithmeticMean = function () {
  battonClick(formRow);
  let out = resultOuter(arithmeticMeanOb);
  let numbers = row.slice();
  let i;
  let arMean = 0;
  for (i = 0; i < numbers.length; i++) {
    arMean = numbers[i] + arMean;
  }
  arMean = arMean / numbers.length;
  out[0].innerHTML = arMean;
}
let arithmeticMeanOb = {
  name: "arithmeticMean",
  buttonDesc: "Средн.знач.",
  failureDesc: "Вы ввели некоректные данные.",
  description: "Нахождение среднего арифметического значения чисел массива."
};
namesFunctions.push(arithmeticMeanOb);

/* 6)  to count an amount repeat numbers of an array's elements*/
let repeatNumbers = function () {
  battonClick(formRow);
  let out = resultOuter(repeatNumbersOb);
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

  out[0].innerHTML = result;
}
let repeatNumbersOb = {
  name: "repeatNumbers",
  buttonDesc: "Повтор. знач.",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Нахождение повторяющихся значений массива и их количества."
};
namesFunctions.push(repeatNumbersOb);

/* 7)  implement the reverse function */

let revFunction = function () {
  battonClick(formRow);
  let out = resultOuter(revFunctionOb);
  let reversed = row.slice().reverse();
  out[0].innerHTML = reversed;
}
let revFunctionOb = {
  name: "revFunction",
  buttonDesc: "Реверс",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Реверс значений массива."
};
namesFunctions.push(revFunctionOb);

/* 8)  to show odd numbers of an array */
let oddNumb = function () {
  battonClick(formRow);
  let out = resultOuter(oddNumbOb);
  let i;
  let oddnumbers = [];
  for (i = 0; i < row.length; i++) {
    if (row[i] % 2 != 0) oddnumbers.push(row[i]);
  }
  out[0].innerHTML = oddnumbers;
}
let oddNumbOb = {
  name: "oddNumb",
  buttonDesc: "Нечетные",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Вывод нечетных значений массива."
};
namesFunctions.push(oddNumbOb);
/* 9)  to find en element in an array and implement binar search */

/* 10) to find maximum divider for all numbers of an array */
/*
maxDivider = function () {.

}
namesFunctions.push('maxDivider');
*/
/* 11) to raise array's elements to given degree */

let arrayDegree = function () {
  battonClick(formRow);
  let out = resultOuter(arrayDegreeOb);
  if (getdegree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    let deg = row.map(val => Math.pow(val, getdegree[0] || 0));
    out[0].innerHTML = deg;
    out[1].setAttribute("class", "trueP");
  }
}
let arrayDegreeOb = {
  name: "arrayDegree",
  buttonDesc: "Степени",
  failureDesc: "Введите <b>одно</b> значение в поле доп. данных.",
  description: "Возведение значений массива в заданную степень."
};
namesFunctions.push(arrayDegreeOb);


/* 12) ??? specify */
/* 13) is an array of palindrome*/

let palindr = function () {
  battonClick(formRow);
  let out = resultOuter(palindrOb);
  let answer;
  let i;
  let reversed = row.slice().reverse();
  for (i = 0; i < row.length; i++) {
    if (reversed[i] != row[i]) {
      answer = 'не палиндром';
      break;
    } else {
      answer = 'Палиндром';
    }
  }

  out[0].innerHTML = answer;
}
let palindrOb = {
  name: "palindr",
  buttonDesc: "Палмндром",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Проверка, является ли данный массив палиндромом."
};
namesFunctions.push(palindrOb);

/* 14) to show even numbers of an array */
let evenNumbers = function () {
  battonClick(formRow);
  let out = resultOuter(evenNumbersOb);
  let evenNumbs = [];
  let i;
  for (i = 0; i <= row.length; i++) {
    if (row[i] % 2 == 0) {
      evenNumbs.push(row[i]);
    } else {
      continue;
    }
  }
  out[0].innerHTML = evenNumbs;
}
let evenNumbersOb = {
  name: "evenNumbers",
  buttonDesc: "Четные числа",
  failureDesc: "Введите масив чисел в первое поле.",
  description: "Выведение четных чисел массива."
};
namesFunctions.push(evenNumbersOb);

/* 15) remainder operator
       15.1) array's numbers with remainder*/

let noRemainder = function () {
  battonClick(formRow);
  let out = resultOuter(noRemainderOb);
  if (getdegree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {
    let answer = row.filter(val => val % getdegree[0] == 0);
    out[0].innerHTML = answer;
    out[1].setAttribute("class", "trueP");
  }
}
let noRemainderOb = {
  name: "noRemainder",
  buttonDesc: "Без остатка",
  failureDesc: "Введите <b>одно</b> значение в доп. поле.",
  description: "Введите одно значение в доп. поле на которые данные из масива будут делиться без остатка."
};
namesFunctions.push(noRemainderOb);

/* 16.1 without remainder*/


let withRemainder = function () {
  battonClick(formRow);
  let out = resultOuter(withRemainderOb);
  if (getdegree.length >= 2) {
    out[1].setAttribute("class", "falseP");
  } else {


    let answer = row.filter(val => val % getdegree[0] !== 0);
    out[0].innerText = answer;
    out[1].setAttribute("class", "trueP");
  }
}
let withRemainderOb = {
  name: "withRemainder",
  buttonDesc: "Остаток",
  failureDesc: "Введите <b>одно</b> значение в доп. поле.",
  description: "Введите одно значение в доп. поле на которые данные из масива будут делиться с остатком."
};
namesFunctions.push(withRemainderOb);
/* 17) to put randomly array's elements */


//Создание кнопок
function createButton() {
  let i = 0;

  for (i = 0; i < namesFunctions.length; i++) {
    let divButt = document.createElement('div');
    divButt.setAttribute("class", "divButt");

    let buttInput = "<input id=\"" + namesFunctions[i].name + "\";" +
      " class=\"buttonFunsc\" type=\"button\"" +
      " value=\" " + namesFunctions[i].buttonDesc + " \"" +
      " onclick=\"" + namesFunctions[i].name + "()\">";

    document.getElementById('buttOut').appendChild(divButt).innerHTML = buttInput;

    let pp = document.createElement('div');
    pp.setAttribute("id", namesFunctions[i].name);
    let html2 = "<div class=\"item\"> <h1> Вывод резултата </h1>";
    html2 += " <div class=\"descr\">" + namesFunctions[i].description + "</div>\n";
    html2 += "<p>" + namesFunctions[i].failureDesc + "</p></div>";

    document.getElementById('buttons').appendChild(pp).innerHTML = html2;
  }
}


