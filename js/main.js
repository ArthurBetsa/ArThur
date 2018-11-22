/* 1) to count given degree*/
function battonClick(formRow) {
    resultDegree = document.getElementById('resultDegree');
    row = formRow.givenData.value;
    getdegree = formRow.degree.value;
    resultOutput = document.getElementById('functionsResult');

    document.getElementById('createButton').style.display='inline';
}

namesFunctions = ['degreeCount', 'arrayCount', 'bbb', 'aaa'];



degreeCount = function () {
    a = Math.pow(row, getdegree);
    resultOutput.innerHTML = a;
}


/* 2)  found number on Fibom  */

/* 3)  count an array's elements summ */

function arrayCount() {
    toArrey = row.split(', ');
    resultOutput.innerHTML = Array.isArray(toArrey);

}

/* 4)  sort an array
       4.1) from smaller to bigger
       4.2) from bigger to smaller
 */
/* 5)  arithmetic mean */
/* 6)  to count an amount repeat numbers of an array's elements*/
/* 7)  implement the reverse function */
/* 8)  to show odd numbers of an array */
/* 9)  to find en element in an array and implement binar search */
/* 10) to find maximum divider for all numbers of an array */
/* 11) to raise array's elements to given degree */
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

    document.getElementById('createButton').style.display='none';
    //buttonIn = '<input type="button" name="batton" id="batton" value="'+buttName+'" onclick="'+buttName+'()">';
    //document.write(namesFunctions[0]);
}
