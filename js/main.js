var pointUser = 0;
  var pointComputer = 0;

  var user;
  var computer;

  while (pointUser < 3 && pointComputer <  3) {
  user = prompt("Pierre, feuille ou ciseaux");
  computer = Math.floor((Math.random() * 3) + 1);
