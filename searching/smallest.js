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



// CONVERTITORE DI ARRAY DI NUMERI IN ARRAY DI STRINGHE

function elementsToStrings(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let numberString = String(arr[i]);
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
        arr[i] = letterString;
    }
}



// FUNCTION TO FIND THE MINIMAL VALUE

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
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



// SHELL SORT (DINAMIC GAPS)

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



// SWAP

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}





// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------- ESERCIZIO 3 ----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


/*
Create a function that finds the second-smallest element in a data set. Can you
generalize the function definition for the third-smallest, fourth-smallest, and so
on? Test your functions with a data set of at least 1,000 elements. Test on both
numbers and text.
*/


// NE HO FATTE TRE VERSIONI...



// VERSIONE CON FILTER, RIMUOVENDO OGNI VOLTA I VALORI MINIMI TROVATI DALL'ARRAY

function secondSmallestFilter(arr) {
    let min = findMin(arr);
    return findMin(arr.filter(element => element !== min));
}

function nthSmallestFilter(arr, nth) {
    let arrCopy = [].concat(arr);
    for (let i = 0; i < nth - 1; ++i) {
        let min = findMin(arrCopy);
        arrCopy = arrCopy.filter(element => element != min)        
    }
    return findMin(arrCopy)
}



// VERSIONE ORDINANDO PRIMA L'ARRAY

function secondSmallestSort(arr) {
    shellsortDyn(arr);
    let min = arr[0];
    let secMin;
    for (let i = 0; i < arr.length && !secMin; ++i) {
        if (arr[i] !== min) secMin = arr[i];
    }
    if (secMin) return secMin;
    return "nell'array non c'erano due elementi diversi";
}

function nthSmallestSort(arr, nth) {
    shellsortDyn(arr);
    let countMin = 1;
    let currMin = arr[0];
    let nthMin;
    for (let i = 0; i < arr.length && !nthMin; ++i) {
        if (arr[i] !== currMin) {
            if (countMin === nth-1) {
                nthMin = arr[i];
            }
            else {
                currMin = arr[i];
                countMin++
            }
        }
    }
    if (nthMin) return nthMin;
    return "nell'array non c'erano sufficenti tipi diversi di elementi";
}



// VERSIONE "NORMALE"

function secondSmallest(arr) {
    let min = findMin(arr);
    let secMin = null;
    for (var i = 0; i < arr.length; ++i) {
        if (secMin === null && arr[i] !== min) {
            secMin = arr[i];
        }
        else {
            if (arr[i] !== min && arr[i] < secMin) {
                secMin = arr[i];
            }
        }
    }
    if (secMin === null) return "nell'array non c'erano sufficenti tipi diversi di elementi";
    return secMin;
}

function nthSmallest(arr, nth) {
    let smallests = [];
    for (let i = 1; i <= nth; ++i) {
        let currMin = null;
        for (let i = 0; i < arr.length; ++i) {
            if (currMin === null && !smallests.includes(arr[i])) {
                currMin = arr[i];
            }
            else {
                if (!smallests.includes(arr[i]) && arr[i] < currMin) {
                    currMin = arr[i];
                }
            }
        }
        if (currMin === null) return "nell'array non c'erano sufficenti tipi diversi di elementi";
        smallests.push(currMin);
        if (i === nth) return currMin;
    }
}



let arr = randomArray(10000);

// elementsToStrings(arr);     // FUNZIONE PER CONVERTIRE GLI ELEMENTI IN STRINGHE

console.log("numero più piccolo:", findMin(arr));

console.log("secondo numero più piccolo:", secondSmallestSort(arr));
console.log("terzo numero più piccolo:", nthSmallestSort(arr, 3));



/*

TEST FATTI CON ARRAY DI NUMERI CASUALI (FERMANDOMI COME NTH A 3):

con la versione "filter" ha cominciato a rallentare molto a 100'000'000 elem. (è crashato vsc)
con la versione "sort" ha cominciato a rallentare molto a 100'000'000 elem.
con la versione "normale" ha cominciato a rallentare molto a 100'000'000 elem.

TEST FATTI CON ARRAY DI STRINGHE CASUALI (usando "elementsToStrings") (FERMANDOMI COME NTH A 3):

con la versione "filter" arrivato a 10'000'000 elem. mi ha detto chello spazio nel heap è finito
con la versione "sort" ha cominciato a rallentare molto a 10'000'000 elem. (notevolmente di più degli altri)
con la versione "normale" ha cominciato a rallentare molto a 10'000'000 elem.

TEST FATTI CON ARRAY DI NUMERI CASUALI (CON NUMERO DI ELEMENTI BASSO MA ALZANDO MOLTO NTH):

la più veloce sembra essere la versione "sort" dopo viene la versione "filter" e poi la versione "normale"

TEST FATTI CON ARRAY DI STRINGHE CASUALI (CON NUMERO DI ELEMENTI BASSO MA ALZANDO MOLTO NTH):

stessa cosa:
la più veloce sembra essere la versione "sort" dopo viene la versione "filter" e poi la versione "normale"

*/
