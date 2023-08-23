// Requires prompt-sync and @types/prompt-sync package to be installed
import promptSync from 'prompt-sync';

const prompt = promptSync();

let balance = 0;

function deposit() {
    const amount = prompt('Enter amount: ');
    balance += parseInt(amount);
}

function withdraw() {
    const amount = prompt('Enter amount: ');
    balance -= parseInt(amount);
}

function mainMenu() {
    console.clear();
    console.log('==========================');
    console.log(`Current balance: ${balance}`);
    console.log('1. Deposit');
    console.log('2. Withdraw');

    const selection = prompt('Select alternative: ');
    
    switch (selection) {
        case '1':
            deposit();
            break;
        case '2':
            withdraw();
            break;
        default:
            process.exit(0);
            break;
    }
}

while(true){
    mainMenu();
}