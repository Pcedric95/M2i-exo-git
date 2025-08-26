function calculerStats(nombres) {
    if (nombres.length === 0) {
        return [0, 0, 0];
    }
    var min = nombres[0];
    var max = nombres[0];
    var moyenne = nombres[0];
    for (var i = 1; i < nombres.length; i++) {
        if (nombres[i] < min) {
            min = nombres[i];
        }
        if (nombres[i] > max) {
            max = nombres[i];
        }
        moyenne += nombres[i];
    }
    moyenne /= nombres.length;
    return [min, max, moyenne];
}
var _a = calculerStats([3, 7, 10, 2, 8]), minResultat = _a[0], maxResultat = _a[1], moyenneResultat = _a[2];
console.log("Min : ".concat(minResultat, ", Max : ").concat(maxResultat, ", Moyenne : ").concat(moyenneResultat));
