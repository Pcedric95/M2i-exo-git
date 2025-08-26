var mixte = [];
mixte.push(1);
mixte.push("deux");
for (var i = 0; i < mixte.length; i++) {
    console.log(mixte[i]);
    if (typeof mixte[i] === "number") {
        console.log("Nombre : " + mixte[i]);
    }
    else {
        console.log("Texte : " + mixte[i]);
    }
}
