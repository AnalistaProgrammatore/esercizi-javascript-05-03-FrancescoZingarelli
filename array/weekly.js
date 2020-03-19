class TemperatureMese {

    constructor(nSett) {
        this.temperature = []
        for (let sett = 0; sett < nSett; sett++) {
            this.temperature[sett] = []
        }
    }

    aggiungi(nSett, temperatura) {
        if (nSett > this.temperature.length) {
            console.log(`non puoi aggiungere la temperatura "${temperatura}" in una settimana che non esiste!`);
            return;
        }
        this.temperature[nSett - 1].push(temperatura);
    }

    mediaMese() {
        let nGiorni = 0;
        let somma = 0;
        for (let sett = 0; sett < this.temperature.length; sett++) {
            for (let giorno = 0; giorno < this.temperature[sett].length; giorno++) {
                somma += this.temperature[sett][giorno];
                nGiorni++;
            }
        }
        return Math.round((somma / nGiorni) * 100) / 100;
    }

    mediaSettimana(nSett) {
        let nGiorni = 0;
        let somma = 0;
        for (let giorno = 0; giorno < this.temperature[nSett -1].length; giorno++) {
            somma += this.temperature[nSett - 1][giorno];
            nGiorni++;
        }
        return Math.round((somma / nGiorni) * 100) / 100;
    }

    mediaSettimane() {
        let result = "";
        for (let sett = 1; sett <= this.temperature.length; sett++) {
            result += "Media settimana " + sett + ": " + this.mediaSettimana(sett);
            if(sett < this.temperature.length) result += "\n";
        }
        return result;
    }
}



let nuovoMese = new TemperatureMese(4);

let acc = 0;
for (let sett = 0; sett < 4; sett++) {
    for (let giorno = 0; giorno < 7; giorno++) {
        nuovoMese.aggiungi(sett + 1, acc);
        acc++;
    }
}

console.log(JSON.stringify(nuovoMese));

nuovoMese.aggiungi(5, 200);



console.log("media del mese:", nuovoMese.mediaMese());

console.log("media della seconda settimana:", nuovoMese.mediaSettimana(2));

console.log(nuovoMese.mediaSettimane());
