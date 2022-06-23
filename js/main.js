
class Buch{
    ExemplareAnzahl
    Titel
    Autor
    DatumVeröffentlichung
    Verlag
    Seitenzahl

    constructor(ExemplareAnzahl, Titel, Autor, DatumVeröffentlichung, Verlag, Seitenzahl) {
        this.ExemplareAnzahl = ExemplareAnzahl
        this.Titel = Titel
        this.Autor = Autor
        this.DatumVeröffentlichung = DatumVeröffentlichung
        this.Verlag = Verlag
        this.Seitenzahl = Seitenzahl
    }

    verfügbar(){
        if(this.ExemplareAnzahl===0){
            document.getElementById("Ausgabe").innerHTML = "Von diesem Buch ist leider kein Exemplar mehr da :(."
        }
        else{
            document.getElementById("Ausgabe").innerHTML = "Von diesem Buch sind noch "+this.ExemplareAnzahl+" Exemplare da."
        }
    }

    verkauft(){
        this.ExemplareAnzahl-=1
    }
}

let lager = []

function init(){
    let Buch1 = new Buch (1,"Unterm Rad", "Hermann Hesse", 934, "fotze", 349)
    lager.push(Buch1)
    let Buch2 = new Buch (1, "Hery Buda", "klsdfh", 8586, "nutte", 3409857 )
    lager.push(Buch2)
    let Buch3 = new Buch (1,"Marie Pooooopants", "Karl Lauterbach", 1980, "Flitchen & Co. AG", 3000)
    lager.push(Buch3)
    let Buch4 = new Buch (1, "Star Wurst", "Schorsch Lükäse", 2022, "Disney+", 420)
    lager.push(Buch4)
}

function ausDemSortiment(Titel) {

   
    lager.slice()
}

