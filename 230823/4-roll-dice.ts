function rollDice(min: number, max: number) {
    const randomNumber = Math.random();
    const minMaxNumber = (max - min + 1);
    const x = randomNumber * minMaxNumber;
    const x2 = Math.floor(x);
    return x2 + min;

    // return Math.floor(Math.random() * 6) + 1;
}

for (let index = 0; index < 50; index++) {
    console.log(rollDice(5, 15));
}