// NE HO FATTE DUE VERSIONI:



// VERSIONE PRIMA COPIANDO TUTTO E POI MODIFICANDO LE PROPRIETA' NUMERICHE

function multiplyNumeric({...properties}, factor) {
    let newObj = {...properties};
    Object.keys(newObj).filter(key => typeof newObj[key] === "number").map(key => newObj[key] *= factor)
    return newObj;
}



// VERSIONE MOLTIPLICANDO DURANTE LA COPIA

function multiplyNumeric2(obj, factor) {
    return Object.keys(obj).reduce((newObj, key) => {
            (typeof obj[key] === "number") ? newObj[key] = obj[key] * factor : newObj[key] = obj[key]
            return newObj
        }, {})
}



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

const newMenu = multiplyNumeric(menu, 2)

console.log(menu);
console.log(newMenu);
