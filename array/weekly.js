// ------------------------------------ PRIMA PROVA CON UNA CLASSE UNICA


class TemperatureMese {

    constructor(def = null) {
        this.temperature = []
        for (let riga = 0; riga < 4; riga++) {
            this.temperature[riga] = []
            for (let col = 0; col < 7; col++) {
                this.temperature[riga][col] = def
            }
        }
        this.riempite = 0
    }
    
    static from(arr) {
        let temp = new TemperatureMese
        temp.temperature = arr;
        return temp
    }

    aggiungi(temperatura) {
        if (this.riempite === 28) {
            console.log(`non puoi aggiungere "${temperatura}"! sono già state inserite tutte le temperature`)
            return;
        }

        let contatore = 0;
        for (let riga = 0; riga < 4; riga++) {
            for (let col = 0; col < 7; col++) {
                if (contatore === this.riempite) this.temperature[riga][col] = temperatura;
                contatore += 1;
            }
        }

        this.riempite++

        if (this.riempite === 28) console.log("tutte le temperature del mese sono state riempite!")
    }

    mediaMese() {
        let somma = 0;
        for (let riga = 0; riga < 4; riga++) {
            for (let col = 0; col < 7; col++) {
                somma += this.temperature[riga][col];
            }
        }
        return Math.round(somma / 28);
    }

    mediaSettimana(sett) {
        let somma = 0;
        for (let col = 0; col < 7; col++) {
            somma += this.temperature[sett - 1][col];
        }
        return Math.round(somma / 7);
    }

    mediaSettimane() {
        let result = "";
        for (let sett = 1; sett <= 4; sett++) {
            result += "Media settimana " + sett + ": " + this.mediaSettimana(sett);
            if(sett < 4) result += "\n";
        }
        return result
    }
}



let thisMonth = new TemperatureMese;

for (let i = 0; i < 28; i++) {
    thisMonth.aggiungi(i)
}

thisMonth.aggiungi(50);



console.log(JSON.stringify(thisMonth));



console.log("media del mese:", thisMonth.mediaMese())

console.log("media della seconda settimana:", thisMonth.mediaSettimana(2))

console.log(thisMonth.mediaSettimane())







// ------------------------------------ SECONDA PROVA USANDO ANCHE LA CLASSE WEEKTEMPS


class weekTemps {
    constructor () {
        this.dataStore = [];
    }
    
    add(temp) {
        this.dataStore.push(temp);
    }

    average() {
        var total = 0;
        for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
        }
        return total / this.dataStore.length;
    }
}



class monthTemps {
    constructor(weeksN) {
        this.weeks = [];
        for (let week = 0; week < weeksN; week++) {
            this.weeks[week] = new weekTemps;
        }
    }

    add(week, temp) {
        if (!(this.weeks[week - 1] instanceof weekTemps)) {
            console.log(`non puoi aggiungere la temperatura "${temp}" a una settimana che non esiste!`);
            return;
        }
        this.weeks[week - 1].add(temp)
    }

    monthAverage() {
        let total = 0;
        for (let week = 0; week < this.weeks.length; week++) {
            total += this.weeks[week].average()
        }
        return total / this.weeks.length;
    }

    weekAverage(week) {
        return this.weeks[week - 1].average();
    }

    weeksAverage() {
        let result = "";
        for (let week = 0; week < this.weeks.length; week++) {
            result += "Media settimana " + (week + 1) + ": " + this.weeks[week].average().toFixed(2)
            if (week < this.weeks.length - 1) result += "\n";
        }
        return result;
    }
}



let thisMonth = new monthTemps(4);

thisMonth.add(1, 52);
thisMonth.add(1, 55);
thisMonth.add(1, 61);
thisMonth.add(1, 65);
thisMonth.add(1, 55);
thisMonth.add(1, 50);
thisMonth.add(1, 52);
thisMonth.add(1, 49);

thisMonth.add(2, 2);
thisMonth.add(2, 5);
thisMonth.add(2, 1);
thisMonth.add(2, 5);
thisMonth.add(2, 5);
thisMonth.add(2, 0);
thisMonth.add(2, 2);
thisMonth.add(2, 9);

thisMonth.add(3, 12);
thisMonth.add(3, 15);
thisMonth.add(3, 11);
thisMonth.add(3, 15);
thisMonth.add(3, 15);
thisMonth.add(3, 10);
thisMonth.add(3, 12);
thisMonth.add(3, 19);

thisMonth.add(4, 22);
thisMonth.add(4, 25);
thisMonth.add(4, 21);
thisMonth.add(4, 25);
thisMonth.add(4, 25);
thisMonth.add(4, 20);
thisMonth.add(4, 22);
thisMonth.add(4, 29);

thisMonth.add(5, 200);



console.log("media del mese di thisMonth: ", thisMonth.monthAverage().toFixed(2))

console.log("media della settimana 2 di thisMonth: ", thisMonth.weekAverage(2).toFixed(2));

console.log("media delle settimane di thisMonth:\n" + thisMonth.weeksAverage())
