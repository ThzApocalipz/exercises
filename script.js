// function canConnect(user) {

//   if (user.banned) {
//     console.log("utilisateur banni — accès refusé");
//     return false;
//   }

//   if (user.age >= 18 && user.authorized && !user.banned) {
//     console.log("peut se connecter");
//     return true;
//   }

//   if (user.age < 18) {
//     console.log("ne peut pas se connecter");
//     return false;
//   }

//   if (user.age >= 18 && !user.banned) {
//     console.log("autorisation exceptionnelle — peut se connecter");
//     return true;
//   }

//   console.log("accès refusé");
//   return false;

// }

// const user1 = { age: 25, authorized: true, banned: false };
// const user2 = { age: 15, authorized: false, banned: false };
// const user3 = { age: 28, authorized: false, banned: false };
// const user4 = { age: 40, authorized: true, banned: true };

// console.log("Test 1", canConnect(user1));
// console.log("Test 2", canConnect(user2));
// console.log("Test 3", canConnect(user3));
// console.log("Test 4", canConnect(user4));

// ;

function canConnect(user) {
    const { age, isAuthorized, isBanned } = user;

    const canConnect =
    (!isBanned && !isAuthorized && age >= 18) ||
    (!isBanned && isAuthorized && age >= 18);

      console.log(
    canConnect
      ? "peut se connecter"
      : "ne peut pas se connecter"
  );

  return canConnect;
}

const user1 = { age: 25, authorized: true,  banned: false }; 
const user2 = { age: 17, authorized: false, banned: false }; 
const user3 = { age: 30, authorized: false, banned: false }; 
const user4 = { age: 40, authorized: true,  banned: true  }; 

console.log("Test 1 →", canConnect(user1));
console.log("Test 2 →", canConnect(user2));
console.log("Test 3 →", canConnect(user3));
console.log("Test 4 →", canConnect(user4));
