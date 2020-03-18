class Parola {
    constructor() {
        this.lettere = []
    }

    aggiungi(lettera) {
        this.lettere.push(lettera);
    }

    unisci() {
        return this.lettere.join("")
    }
}



let nuovaParola = new Parola;

nuovaParola.aggiungi("c");
nuovaParola.aggiungi("a");
nuovaParola.aggiungi("n");
nuovaParola.aggiungi("e");

console.log(nuovaParola.unisci())
