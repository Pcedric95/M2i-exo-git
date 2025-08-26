var nombres = [10, 20, 30];
nombres.push(40);
// nombres.push("cinquante"); // ça ne passe pas car "cinquante" n'est pas un nombre
for (var i = 0; i < nombres.length; i++) {
    console.log(Math.pow(nombres[i], 2));
}
