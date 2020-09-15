function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.showVoorrad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);
    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad - 1;
    }

    // Start Opdracht 3
    this.verhoogVoorraad = function () {
        voorraad = voorraad + 1;
    }
    // End Opdracht 3

    // Start Opdracht 4
    this.verhoogVoorraadMeer = function (aantal) {
        voorraad = voorraad + aantal;
    }
    // End Opdracht 4

    // Start Opdracht 5
    this.verlaagVoorraadMeer = function (aantal) {
        voorraad = voorraad - aantal;
    }
    // End Opdracht5
}