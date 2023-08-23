const myName: string = "Kalle Kalle";
const firstName: string = myName.split(" ")[0];
const lastName: string = myName.split(" ")[1];

console.log({ firstName, lastName });


if(myName === "Anders And") {
    console.log("Vi har samma namn!");
}
else if(firstName === "Anders") {
    console.log("Vi har samma förnamn!");
}
else if(lastName === "And") {
    console.log("Vi har samma efternamn!");
}
else {
    console.log("Vi har olika namn!");
}


export {};