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





// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------- ESERCIZIO 3 ----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


/*
Create a function that finds the second-smallest element in a data set. Can you
generalize the function definition for the third-smallest, fourth-smallest, and so
on? Test your functions with a data set of at least 1,000 elements. Test on both
numbers and text.
*/



// NE HO FATTE TRE VERSIONI, BO...



// VERSIONE CON FILTER, RIMUOVENDO I VALORI MINIMI TROVATI DALL'ARRAY

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
    insertionSort(arr);
    let min = arr[0];
    let secMin;
    for (let i = 0; i < arr.length && !secMin; ++i) {
        if (arr[i] !== min) secMin = arr[i];
    }
    if (secMin) return secMin;
    return "nell'array non c'erano due elementi diversi";
}

function nthSmallestSort(arr, nth) {
    insertionSort(arr);
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



let arr = randomArray(10);
console.log(arrToString(arr));

console.log("\nnumero più piccolo:", findMin(arr));

console.log("secondo numero più piccolo:", secondSmallest(arr));
console.log("terzo numero più piccolo:", nthSmallest(arr, 3));
