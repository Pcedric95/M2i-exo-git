function calculerStats(nombres: number[]){
    
    if(nombres.length === 0){
        return[0, 0, 0];
    }

    let min = nombres[0];
    let max = nombres[0];
    let moyenne = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
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

const [minResultat, maxResultat, moyenneResultat] = calculerStats([3, 7, 10, 2, 8]);
console.log(`Min : ${minResultat}, Max : ${maxResultat}, Moyenne : ${moyenneResultat}`);