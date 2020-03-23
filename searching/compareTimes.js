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



//  SEQUENTIAL SEARCH

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}



// BINARY SEARCH

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
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





// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------- ESERCIZIO 2 ----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


/*
Compare the time it takes to perform a sequential search with the total time it takes
to both sort a data set using insertion sort and perform a binary search on the data
set. What are your results?
*/

function sortAndSearch (arr, data) {
    insertionSort(arr);
    return binSearch(arr, data);
}

function algoTimer(numElements, alg, prove, data) {
    let tempi = [];
    for (let i = 0; i < prove; ++i) {
        let arr = randomArray(numElements);

        let startTime = new Date().getTime();
        alg(arr, data);
        tempi.push(new Date().getTime() - startTime)
    }
    return (tempi.reduce((acc, curr) => acc + curr) / tempi.length);
}

console.log("medie del tempo impiegato per un array di 30000 elementi:\n");
console.log("sequential search:", algoTimer(30000, seqSearch, 40, 15000), "ms");
console.log("insertion sort + binary search:", algoTimer(30000, sortAndSearch, 10, 15000), "ms");



// i risultati sono un po' altalenanti ma per un array di 30000 numeri casuali
// con la sequential search ci mette circa:             0.15 ms
// con insertion sort + binary search ci mette circa:   355 ms !!!
