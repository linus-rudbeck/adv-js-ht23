import fs from 'fs';
import path from 'path';

function sumNumbers(numbers: number[]) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    console.log({ sum });

    // Reduce
    const sum2 = numbers.reduce((acc, n) => acc + n, 0);
    console.log({ sum2 });
}

try {
    const fullPath = path.join(__dirname, 'input.txt');
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const numbers = fileContent.split(',').map((n) => parseInt(n));

    sumNumbers(numbers);
} catch (error) {
    console.log("No numbers");
}



