function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}



function shellsortDyn(arr) {
    var N = arr.length;
    var h = 1;
    while (h < N/3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && arr[j] < arr[j-h]; j -= h) {
                swap(arr, j, j-h);
            }
        }
        h = (h-1)/3;
    }
}



function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left+step, right, arr.length);
        }
        step *= 2;
    }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length-1] = Infinity; // a sentinel value
    leftArr[leftArr.length-1] = Infinity; // a sentinel value
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}



function quickSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}





class TestingArray {
    constructor(numElements) {
        this.dataStore = []
        this.numElements = numElements;

        for (var i = 0; i < numElements; ++i) {       // RIEMPIMENTO VALORI INIZIALI
            this.dataStore[i] = i;
        }
    }

    setData() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() *
            (this.numElements+1));
        }
    }

    elementsToStrings() {
        for (let i = 0; i < this.dataStore.length; ++i) {
            let numberString = String(this.dataStore[i]);
            let letterString = "";
            for (let number of numberString) {
                if (number === "0") letterString += "zero";
                if (number === "1") letterString += "one";
                if (number === "2") letterString += "two";
                if (number === "3") letterString += "three";
                if (number === "4") letterString += "four";
                if (number === "5") letterString += "five";
                if (number === "6") letterString += "six";
                if (number === "7") letterString += "seven";
                if (number === "8") letterString += "eight";
                if (number === "9") letterString += "nine";
            }
            this.dataStore[i] = letterString;
        }
    }

    toString() {
        var retstr = "[";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i];
            if (i < this.dataStore.length - 1) retstr += ", ";
            if (i > 0 && i % 10 == 0) {
                retstr += "\n";
                }
            }
        retstr += "]"
        return retstr;
    }

    shellsortDyn() {
        shellsortDyn(this.dataStore);
    }

    mergeSort() {
        mergeSort(this.dataStore);
    }

    quickSort() {
        this.dataStore = quickSort(this.dataStore);
    }
}





let test = new TestingArray(10000);

test.setData();

test.elementsToStrings();   // USARE PER CONVERTIRE GLI ELEMENTI IN STRINGHE



let startTime = new Date().getTime();   // MEMORIZZA IL TEMPO INIZIALE

test.mergeSort()   // CAMBIARE LA FUNZIONE PER PROVARE I VARI ALGORITMI

console.log(`\nci ha messo:`, new Date().getTime() - startTime, `millisecondi\n`);   // MOSTRA IL TEMPO IMPIEGATO



/*

TEST CON 50'000 ELEMENTI CASUALI:

NUM - SHELL SORT - 18,15,15,15,16,15,15,15,16,17,18,15,16   media: 16 ms
NUM - MERGE SORT - 41,37,36,36,40,36,38,37,38,36,37,37,36   media: 37 ms
NUM - QUICK SORT - 64,57,54,62,58,58,59,61,60,55,63,62,65   media: 60 ms

STR - SHELL SORT - 156,150,144,141,151,148,146,150,150,153,140,148,144   media: 148 ms
STR - MERGE SORT - 102,110,107,105,109,101,112,105,107,106,104,103,112   media: 106 ms
STR - QUICK SORT - 112,120,120,117,118,109,125,116,112,108,118,102,111   media: 114 ms

con i numeri in ordine dal più veloce ci sono: shell, merge, quick

con le stringhe sono tutti più lenti, ma l'ordine cambia, dal più veloce ci sono: merge, quick, shell

*/
