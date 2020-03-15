let votiMario = {
    voti: [],

    aggiungi(voto) {
        this.voti.push(voto)
    },

    mostraMedia() {
        return this.voti.reduce((acc, curr) => acc + curr) / this.voti.length
    }
}

votiMario.aggiungi(10)
votiMario.aggiungi(8)
votiMario.aggiungi(6)

console.log(votiMario.voti)
console.log(votiMario.mostraMedia())
