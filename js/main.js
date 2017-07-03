function game () {

var pointUser = 0;
var pointComputer = 0;

var user;
var computer;

while (pointUser < 3 && pointComputer <  3) {
  user = prompt("Pierre, feuille ou ciseaux");
  computer = Math.floor((Math.random() * 3) + 1);

  if (computer === 1) {
    computer="pierre";
  }
  else if (computer === 2) {
    computer="feuille";
  }
  else {
    computer="ciseaux";
  }

  document.getElementById("choixJoueur").innerHTML ="Vous: " + user;
  document.getElementById("choixOrdi").innerHTML ="l'Ordinateur: " + computer;

  if (user === computer) {
    document.getElementById("resultat").innerHTML ="égalité";
  }

  else if (user === "pierre" && computer === "ciseaux") {
    document.getElementById("resultat").innerHTML ="1 point pour toi";
    pointUser++;
  }


  else if (user === "feuille" && computer === "pierre") {
  document.getElementById("resultat").innerHTML ="1 point pour toi";
    pointUser++;
  }

  else if (user === "feuille" && computer === "ciseaux") {
      document.getElementById("resultat").innerHTML ="perdu";
      pointComputer++;
        }

        else if (user === "pierre" && computer === "feuille") {
      document.getElementById("resultat").innerHTML ="perdu";
      pointComputer++;
        }

        else if (user === "ciseaux" && computer === "feuille") {
      document.getElementById("resultat").innerHTML ="1 point pour toi";
      pointUser++;
      }

  else if (user === "ciseaux" && computer === "pierre") {
    document.getElementById("resultat").innerHTML ="perdu";
    pointComputer++;
  }

  document.getElementById("pointJoueur").innerHTML = "Vous: " + pointUser;
  document.getElementById("pointOrdi").innerHTML = "l'Ordinateur: " + pointComputer;
}

  if (pointUser === 3) {
    document.getElementById("winner").innerHTML ="Tu as gagné la partie !";
  }

  else {
    document.getElementById("winner").innerHTML ="Tu as perdu la partie !";
  }

}
