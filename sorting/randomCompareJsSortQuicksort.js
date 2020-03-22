// SWAP

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}



// BUBBLE SORT

function bubbleSortMia(arr) {
    for (let outer = arr.length-1; outer >= 1; --outer) {
        for (let inner = 0; inner <= outer-1; ++inner) {
            if (arr[inner] > arr[inner+1]) {
                swap(arr, inner, inner+1);
            }
        }
    }
}



// SELECTION SORT

function selectionSort(arr) {
    let min, temp;
    for (let outer = 0; outer <= arr.length-2; ++outer) {
        min = outer;
        for (let inner = outer + 1; inner <= arr.length-1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
}



// INSERTION SORT

function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length-1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner-1] >= temp)) {
            arr[inner] = arr[inner-1];
            --inner;
        }
        arr[inner] = temp;
    }
}



// SHELL SORT

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



// MERGE SORT (BOTTOM-UP)

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



// QUICKSORT

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





// CLASSE PER GENERARE ARRAY PER TESTARE GLI ALGORITMI

class TestingArray {
    constructor(numElements) {
        this.dataStore = []
        this.pos = 0;
        this.numElements = numElements;

        this.swap = swap;

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

    clear() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    insert(element) {
        this.dataStore[this.pos++] = element;
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

    bubbleSort() {
        bubbleSort(this.dataStore);
    }
    bubbleSortMia() {
        bubbleSortMia(this.dataStore);
    }
    selectionSort() {
        selectionSort(this.dataStore);
    }
    insertionSort() {
        insertionSort(this.dataStore);
    }
    shellsort() {
        shellsort(this.dataStore);
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







// FUNZIONI PER TESTARE GLI ALGORITMI

let testAlgoritmo = function(nomeAlgoritmo, numeroElementi, casuale, stringhe, numeroProve) {
    let test = new TestingArray(numeroElementi);
    let tempi = [];
    if (stringhe) test.elementsToStrings();
    if (!casuale) test.shellsortDyn();

    for (let i = 0; i < numeroProve; ++i) {
        if (casuale) {
            test.setData();
            if (stringhe) test.elementsToStrings();
        }
        let startTime = new Date().getTime();
        test[nomeAlgoritmo]();
        tempi.push(new Date().getTime() - startTime)
    }
    return tempi.reduce((acc, curr) => acc + curr) / numeroProve
}



let testAlgoritmoDaArray = function(nomeAlgoritmo, numeroProve, arr) {
    let test = new TestingArray(0);
    let tempi = []
    for (let i = 0; i < numeroProve; ++i) {
        test.dataStore = [].concat(arr)

        let startTime = new Date().getTime();
        test[nomeAlgoritmo]();
        tempi.push(new Date().getTime() - startTime)
    }
    return tempi.reduce((acc, curr) => acc + curr) / numeroProve
}





let test = new TestingArray(20000);
test.setData();

console.log("20000 numeri casuali - quick sort:  ", testAlgoritmoDaArray("quickSort", 40, test.dataStore), "ms")



let tempi = [];
for (let i = 0; i < 40; ++i) {
    let arr = [].concat(test.dataStore);
    let startTime = new Date().getTime();
    arr.sort();
    tempi.push(new Date().getTime() - startTime)
}
console.log("20000 numeri casuali - JavaScript built-in sort:  ", tempi.reduce((acc, curr) => acc + curr) / 40, "ms")



// confrontando il quick sort con l'algoritmo di sorting di javascript quello di javascript è più veloce...
