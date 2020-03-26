let calculator = {
    values: [],

    sum() {
        return this.values.reduce((acc, cur) => acc + cur);
    },

    sub() {
        return this.values.reduce((acc, cur) => acc - cur);
    },

    mul() {
        return this.values.reduce((acc, cur) => acc * cur);
    },

    div() {
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
    },
}

calculator.values = [6, 3, 2]
console.log( calculator.sum() )
console.log( calculator.sub() )
console.log( calculator.mul() )
console.log( calculator.div() )

calculator.values = [6, 3, 0]
console.log( calculator.div() )
