// Les exercises 1 à 5 seront tous ensembles dans ce fichier

// Exo 1: Somme entiers de 1 à N    

console.log("Exo 1: Somme entiers de 1 à N");

let N = Number(prompt("Entrez un nombre entier N:"));

if (!Number.isInteger(N) || N < 1) {
    console.log("Veuillez entrer un nombre entier positif.");
    } else {
    let somme = 0;
    for (let i = 1; i <= N; i++) {
        somme += i;
    }
    console.log(`La somme des nombres de 1 à ${N} est ${somme}.`);
}

// Exo 2: Table de multiplication

console.log("Exo 2: Table de multiplication");

let X = Number(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

if (isNaN(X)) {
    console.log("Veuillez entrer un nombre valide.");
} else {
    console.log(`Table de multiplication de ${X} :`);
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${X} x ${i} = ${X * i}`);
    }
}


// Exo 3: Nombre premier

console.log("Exo 3: Nombre premier");

let nombrePremier = parseInt(prompt("Entrez un nombre pour vérifier s'il est premier :"));
function estPremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return false;
    }
    return true;
}
alert(estPremier(nombrePremier) ? `${nombrePremier} est premier` : `${nombrePremier} n'est pas premier`);
console.log(estPremier(nombrePremier) ? `${nombrePremier} est premier` : `${nombrePremier} n'est pas premier`);

// Exo 4: Factoriel

console.log("Exo 4: Factoriel");

let nombreFactoriel = parseInt(prompt("Entrez un nombre pour calculer son factoriel :"));
function factoriel(n) {
    if (n === 0) return 1;
    return n * factoriel(n - 1);
}
alert(`Le factoriel de ${nombreFactoriel} est ${factoriel(nombreFactoriel)}`);
console.log(`Le factoriel de ${nombreFactoriel} est ${factoriel(nombreFactoriel)}`);

// Exo 5: Filtrer tableau

console.log("Exo 5: Filtrer tableau");

let tableau = [];

while (tableau.length === 0) {
    let tableauInput = prompt("Entrez des nombres séparés par des virgules :");
    if (!tableauInput) continue; // si rien n'est saisi, redemande
    tableau = tableauInput
        .split(",")
        .map(Number)
        .filter(n => !isNaN(n)); // ne garder que les nombres valides
    if (tableau.length === 0) {
        alert("Veuillez entrer au moins un nombre valide !");
    }
}

function filtrerTableau(tableau) {
    let pairs = [];
    let multiplesDe3 = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) pairs.push(tableau[i]);
        if (tableau[i] % 3 === 0) multiplesDe3.push(tableau[i]);
    }
    return { pairs, multiplesDe3 };
}

let resultat = filtrerTableau(tableau);
alert(`Nombres pairs : ${resultat.pairs}\nMultiples de 3 : ${resultat.multiplesDe3}`);
console.log(`Nombres pairs : ${resultat.pairs}`);
console.log(`Multiples de 3 : ${resultat.multiplesDe3}`);


