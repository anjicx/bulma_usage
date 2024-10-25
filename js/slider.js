
var slajdIndex = 0;//na pocetku index=0
prikaziSlajdeve();//kada se ucita sajt pozovi odmah fju

function prikaziSlajdeve() {

    var slajdovi = document.getElementsByClassName("slajd");//sve slajd klase zapamti ->svi sa: <div class="slajd fade">
    var i;
    for (i = 0; i < slajdovi.length; i++) {//prodji kroz sve slajdove
      slajdovi[i].style.display = "none";//ni 1 da se ne prikaze ako je prethodni ostao da bi naredni se prikazao display block
    }
    
    slajdIndex++;//povecaj =1/2
    if (slajdIndex > slajdovi.length) {slajdIndex = 1}//kada dodje na4 vrati na star
    slajdovi[slajdIndex-1].style.display = "block";//-1 zbog niza koji od 0 krece
    setTimeout(prikaziSlajdeve, 4000); //nakon 4s opet pozovi ovu fju opet
  }