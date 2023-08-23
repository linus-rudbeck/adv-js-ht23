interface User {
    username: string;
    password: string;
    age: number;
    language: string;
}

function validateUser(user: User): boolean {
    const usernameLongerThan6Chars = user.username.length > 6;
    const passwordLongerThan6Chars = user.password.length > 6;
    const languageIs5Chars = user.language.length === 5;

    const validUser = usernameLongerThan6Chars && passwordLongerThan6Chars && languageIs5Chars;

    return validUser;
}

function validateUser2(user: User): boolean {
    return user.username.length > 6
        && user.password.length > 6
        && user.language.length === 5;
}


const validUser: User = {
    username: 'developer',
    password: '12345678',
    age: 20,
    language: 'en-us'
}

const invalidUser: User = {
    username: 'dev',
    password: '1234',
    age: 20,
    language: 'en'
}

console.log(validateUser(validUser)); // true
console.log(validateUser(invalidUser)); // false

console.log(validateUser2(validUser)); // true
console.log(validateUser2(invalidUser)); // false