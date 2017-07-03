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

console.log("Vous: " + user);
console.log("l'Ordinateur: " + computer);

if (user === computer) {
        console.log("égalité");
    }

    else if (user === "pierre" && computer === "ciseaux") {
        console.log("1 point pour toi");
        pointUser++;
        }



    else if (user === "feuille" && computer === "pierre") {
      console.log("1 point pour toi");
      pointUser++;
        }



    else if (user === "ciseaux" && computer === "pierre") {
      console.log("perdu");
      pointComputer++;
        }

        else if (user === "" || user !== "pierre" || user !== "feuille" || user !== "ciseaux") {
          user = prompt("Error Replay");
        }
