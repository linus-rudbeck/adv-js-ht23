function isNumber(value: unknown): boolean {
    const str = String(value)

    const isANumber = !isNaN(parseFloat(str))

    return isANumber
}

console.log(isNumber(1)); // true
console.log(isNumber('1')); // true
console.log(isNumber('a')); // false
console.log(isNumber('')); // false
console.log(isNumber([])); // false
console.log(isNumber({})); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber("1000000")); // true