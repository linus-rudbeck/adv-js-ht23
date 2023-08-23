function countTruesFilter(arr: boolean[]) {
    const trues = arr.filter(Boolean);

    // Boolean(...) is a function that returns true if the value is truthy, false otherwise
    return trues.length;
}

function countTruesForOf(arr: boolean[]) {
    let count = 0;

    for (const value of arr) {
        if (value) {
            count++;
        }
    }

    return count;
}

function countTruesReduce(arr: boolean[]) {
    return arr.reduce((acc, value) => {
        if (value === true) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}

const boolArray = [true, false, true, true, false, false, true, false, true, true, true, false, false, false, true];

console.log(countTruesFilter(boolArray)); // 8
console.log(countTruesFilter(boolArray)); // 8
console.log(countTruesReduce(boolArray)); // 8