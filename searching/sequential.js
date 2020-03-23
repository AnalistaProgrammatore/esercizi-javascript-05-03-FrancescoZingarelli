// ----------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ VARIE FUNZIONI UTILI ------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


// FUNZIONE PER CREARE UN ARRAY DI NUMERI CASUALI

function randomArray(numElements) {
    let arr = [];
    for (var i = 0; i < numElements; ++i) {
        arr.push(Math.floor(Math.random() * (numElements+1)));
    }
    return arr;
}



// FUNZIONE PER MOSTRARE ARRAY LUNGHI QUANDO SI FANNO I TEST

function arrToString(arr) {
    var retstr = "[";
    for (var i = 0; i < arr.length; ++i) {
        retstr += arr[i];
        if (i < arr.length - 1) retstr += ", ";
        if (i > 0 && i < arr.length -1 && i % 10 == 9) {
            retstr += "\n";
            }
        }
    retstr += "]"
    return retstr;
}





// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------- ESERCIZIO 1 ----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


/*
The sequential search algorithm always finds the first occurrence of an element in
a data set. Rewrite the algorithm so that the last occurrence of an element is returned.
*/



function seqSearchLast(arr, data) {
    for (var i = arr.length -1; i >=0; --i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}



let arr = randomArray(30);
console.log(arrToString(arr), "\n");

let pos = seqSearchLast(arr, 0);

if (pos > -1) console.log("il primo 0 trovato (partendo dalla fine) si trova nella posizione:", pos);
else console.log("non è stato trovato nessuno 0");
