function Calculator(values) {
    this.values = values;

    this.sum = function() {
        return this.values.reduce((acc, cur) => acc + cur);
    }

    this.sub = function() {
        return this.values.reduce((acc, cur) => acc - cur);
    }

    this.mul = function() {
        return this.values.reduce((acc, cur) => acc * cur);
    }

    this.div = function() {
        let zero = false;
        return this.values.reduce((acc, cur) => {
                if (!zero) {
                    if (cur !== 0) {
                        return acc / cur;
                    }
                    zero = true;
                    return "non puoi dividere per zero!"
                }
                return acc
            });
    }
}

let calculator = new Calculator([6, 3, 2]);

console.log( calculator.sum() )
console.log( calculator.sub() )
console.log( calculator.mul() )
console.log( calculator.div() )
