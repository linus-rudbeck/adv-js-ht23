// Logga text i konsollen
console.log("Tjenare världen")

// Variabler
const myName = "Linus"
console.log(myName);

// Objekt
const mySister = {
    name: "Anna",
    age: 30
}
console.log(mySister);
console.log({ myName });

// Operatorer
const sum = 10 + 5;
const difference = 10 - 5;
const product = 10 * 5;
const fraction = 10 / 5;
console.log(sum, difference, product, fraction);
console.log({ sum, difference, product, fraction });


// If-satser
const myAge = 50;

if (myAge < 16) {
    console.log("Du är för ung för att köra bil");
}
else if (myAge < 18) {
    console.log("Du får övningsköra");
}
else {
    console.log("Du får köra bil");
}

// While loop
let wowCounter = 0;

while (wowCounter < 30) {
    console.log("wow");
    wowCounter++;
}

// console.log(`Nu är wowCounter 10`);
console.log(`Nu är wowCounter ${wowCounter}`);

// For loop
for (let i = 0; i < 3; i++) {
    console.log(`Nu är i ${i}`);
}

// For of-loop
const names = ["Linus", "Anna", "Erik", "Sara"];

for (const name of names) {
    console.log(name);
}

// For in loop
const scoreBoard = {
    Linus: 10,
    Anna: 20,
    Erik: 15,
    Sara: 25
}

for (const name in scoreBoard) {
    const score = scoreBoard[name];
    console.log(`${name} score is ${score}`);
}

// Funktioner
function calculateSum(a, b) {
    console.log(this);
    const sum = a + b;
    return sum;
}

const largeSum = calculateSum(100, 500);

console.log({ largeSum });


// Arrow-funktioner
const calculateProduct = (a, b) => {
    console.log(this);
    const product = a * b;
    return product;
}

const largeProduct = calculateProduct(500, 100);

console.log({ largeProduct });