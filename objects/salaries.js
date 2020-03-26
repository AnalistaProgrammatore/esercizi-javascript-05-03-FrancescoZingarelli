let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(obj) {
    return Object.keys(obj).map(key => obj[key]).reduce((sum, curr) => sum + curr)
}

console.log(sumSalaries(salaries));
