


function battonClick(formRow) {
    resultDegree = document.getElementById('resultDegree');
    row = +formRow.numersRow.value;
    getdegree = +formRow.degree.value;

    a = row+getdegree;
    a = Math.pow(row,getdegree);
    document.write(resultDegree.innerText = a);

}
//1231231