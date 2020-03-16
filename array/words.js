let parole = {
    parole: [],
    aggiungi(parola){
        this.parole.push(parola)
    },
    paroleDritte() {
        return this.parole.join(", ")
    },
    paroleAlContrario() {
        return this.parole.reduce((acc, curr) => {
            acc.unshift(curr);
            return acc;
        }, []).join(", ")
    },
    // versione di Aldo:
    paroleAlContrario2() {
        return this.parole.reduce((acc, curr) => curr + ", " + acc)
    }
}

parole.aggiungi("parola1")
parole.aggiungi("parola2")
parole.aggiungi("parola3")

console.log(parole.parole)
console.log(parole.paroleDritte())
console.log(parole.paroleAlContrario2())
