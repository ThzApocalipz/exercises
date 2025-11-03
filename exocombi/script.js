
const codeA = Math.floor(Math.random() * 6);
const codeB = Math.floor(Math.random() * 6);

let propositionA = Number(prompt("Devine la valeur de A (entre 0 et 5) :"));
let propositionB = Number(prompt("Devine la valeur de B (entre 0 et 5) :"));

if (propositionA === codeA && propositionB === codeB) {
  alert("Bravo !");
} else if ((propositionA === codeA) ^ (propositionB === codeB)) {
  alert("Presque !");
} else {
  alert("Réessayez !");
}

console.log("Code secret :", codeA, codeB);