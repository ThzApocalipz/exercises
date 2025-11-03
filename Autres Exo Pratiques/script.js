// Les exercises 1 à 5 seront tous ensembles dans ce fichier

// Exo 1: Somme entiers de 1 à N    

console.log("Exo 1: Somme entiers de 1 à N");

let N = Number(prompt("Entrez un nombre entier N:"));
let M = 5
let P = 7

function calculSomme(numberParam) {
    
    if (!Number.isInteger(numberParam) || numberParam < 1) {
        console.log("Veuillez entrer un nombre entier positif.");
    } else {
        let somme = 0;
        for (let i = 1; i <= numberParam; i++) {
            somme += i;
        }

    
        console.log(`La somme des nombres de 1 à ${numberParam} est ${somme}.`);
        alert(`La somme des nombres de 1 à ${numberParam} est ${somme}.`);
    }
}

calculSomme(M);
calculSomme(P);



// Exo 2: Table de multiplication

console.log("Exo 2: Table de multiplication");

let X = Number(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
let A = 5

function multiplicationTable(numberMulti) {

    if (isNaN(numberMulti)) {
        console.log("Veuillez entrer un nombre valide.");
    } else {
        console.log(`Table de multiplication de ${numberMulti} :`);
    
        for (let i = 1; i <= 10; i++) {
            console.log(`${numberMulti} x ${i} = ${numberMulti * i}`);
        }
    }
}

multiplicationTable(A);

// Exo 3: Nombre premier

console.log("Exo 3: Nombre premier");

let B = 11

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

estPremier(B);

console.log(estPremier(B) ? `${B} est premier` : `${B} n'est pas premier`);

// Exo 4: Factoriel

console.log("Exo 4: Factoriel");

let C = 6

let nombreFactoriel = parseInt(prompt("Entrez un nombre pour calculer son factoriel :"));
function factoriel(n) {
    if (n === 0) return 1;
    return n * factoriel(n - 1);
}
alert(`Le factoriel de ${nombreFactoriel} est ${factoriel(nombreFactoriel)}`);
console.log(`Le factoriel de ${nombreFactoriel} est ${factoriel(nombreFactoriel)}`);

factoriel(C);

console.log(`Le factoriel de ${C} est ${factoriel(C)}`);

// Exo 5: Filtrer tableau

console.log("Exo 5: Filtrer tableau");

let D = [12, 7, 5, 20, 33, 42, 8, 15];

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

filtrerTableau(D);

console.log("Nombres pairs dans D :", filtrerTableau(D).pairs);
console.log("Multiples de 3 dans D :", filtrerTableau(D).multiplesDe3);


