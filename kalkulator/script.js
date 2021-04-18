let poprzedniaLiczba = 0;
let poprzedniaOperacja ="";

function wpisz(liczba) {
    const wynik = document.getElementById("wynik");
    wynik.value =Number (wynik.value + liczba);
}

function wyczysc(){
    const wynik = document.getElementById("wynik");
    wynik.value = "0";
}

function rownaSie(){
    const wynik = document.getElementById("wynik");
    if(poprzedniaOperacja==="+"){
        wynik.value = Number(poprzedniaLiczba) + Number(wynik.value);
    }
    if(poprzedniaOperacja==="-"){
        wynik.value = poprzedniaLiczba - wynik.value;
    }
    if(poprzedniaOperacja==="*"){
        wynik.value = poprzedniaLiczba * wynik.value;
    }
    if(poprzedniaOperacja==="/"){
        wynik.value = poprzedniaLiczba / wynik.value;
    }

    poprzedniaOperacja = "";
}

function operacja(operator){
    rownaSie();
    poprzedniaOperacja = operator;
    const wynik = document.getElementById("wynik");
    poprzedniaLiczba = wynik.value;
    wyczysc();
}

function zmienZnak(){
    const wynik = document.getElementById("wynik");
    wynik.value = wynik.value * -1;
}

function procent(){
    const wynik = document.getElementById("wynik");
    wynik.value = wynik.value/100;
}

function dodajKropke(){
    const wynik = document.getElementById("wynik");
    if(!wynik.value.includes(".")) {
        wynik.value += ".";
    }
}