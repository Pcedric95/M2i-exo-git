let mixte: Array<number | string> = [];

mixte.push(1);
mixte.push("deux");
mixte.push(3);


for (let i = 0; i < mixte.length; i++) {
  if (typeof mixte[i] === "number") {
    console.log("Nombre : " + mixte[i]);
  }else{
    console.log("Texte : " + mixte[i]);
  }
}