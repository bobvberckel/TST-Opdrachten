function Auto(merk, bouwjaar) {

    let brand = merk;
    let year = bouwjaar;

    this.getBrand = function () {
        return brand;
    }
   
    this.getYear = function () {
        return year;
    }
   
    this.showDetails = function () {
        console.log('Automerk: ' + brand + ' bouwjaar: ' + bouwjaar);
    }
   
}