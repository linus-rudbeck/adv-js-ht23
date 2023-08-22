console.log("Mitt fina typescript-projekt");

// Explicit typing
const myName: string = "Johan";
const myAge: number = 42;
const isHuman: boolean = true;
const myHobbies: string[] = ["Programming", "Gaming", "Reading"];
const someValue: any = "Hello World";

console.log({ myName, myAge, isHuman, myHobbies, someValue})

// Implicit typing
const mySistersName = "Anna";
const mySistersAge = 40;

console.log("Name type: " + typeof mySistersName);
console.log("Age type: " + typeof mySistersAge);


// Funktioner 
function getTheAgeOfTheUniverse(): number {
    // return "Hello";
    return 13.798 * Math.pow(10, 9);
}

const ageOfTheUniverse = getTheAgeOfTheUniverse();

console.log("Age of the universe: " + ageOfTheUniverse);

// Funktioner med typade parametrar
function calculateSumOfNumbers(a: number, b: number): number {
    return a + b;
}

const sum = calculateSumOfNumbers(1, 5);

console.log({ sum });

let someName:any = "Atlas";
someName = 42; // Error

// Interfaces
interface Person {
    name: string;
    age?: number; // Optional
}

const person: Person = {
    name: "Johan",
    age: 42
}

const person2: Person = {
    name: "Anna"
}

console.log({ person, person2 });

const people: Person[] = [
    person
]

people.push(person2);

console.log({ people });

// Enums
enum Versions {
    Development, // 0
    Alpha, // 1
    Beta, // 2
    RC, // 3 (Release Candidate)
    Release // 4
}

enum VersionNames {
    Development = "Development", // 0
    Alpha = "Alpha", // 1
    Beta = "Beta", // 2
    RC = "RC", // 3 (Release Candidate)
    Release = "Release" // 4
}

const currentVersion = Versions.Beta;

console.log({ currentVersion });


// Enums av statuskoder

enum StatusCodes {
    OK = 200,
    Created = 201,
    NotFound = 404,
    InternalServerError = 500
}