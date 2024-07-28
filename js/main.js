

/* 1-masala */

/* 1 */

/* let number = 987;

    function reverse(num) {
    if (num < 100 || num > 999) {
        return "3 xonali son kiriting";
    }

    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;

    let reversedNum = (ones * 100) + (tens * 10) + hundreds;
    return reversedNum;
}
console.log(reverse(number));   */

/* 2 */
/* let input = prompt("Ixtiyoriy son kiriting:");
let num = Number(input);

if (num >= 0) {
    let result = factorial(num);
    console.log(`${result}`);
} 

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
} */


/* 4 */
/* let input = prompt("Son kiriting:");
let num = Number(input);

if (num > 0) {
    numbers(num);
} 
else {
    console.log("Musbat son kiriting.");
}

function numbers(num) {
    if (num > 0) {
        numbers(num - 1);
        console.log(num);
    }
} */

/* 5 */
/* let user = {name: "Shaxzod"};
let age = {age: 25};
let userJob = {job: "Developer"};

let total = Object.assign({}, user, age, userJob);

console.log(total); */

/* 6 */
/* let salaries = {
    aXodim: 150,
    bXodim: 180,
    cXodim: 210
};

function total(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

console.log(total(salaries));  */

/* 7 */

/* let numbers = [4,2,4,6,9,12,41,65,3,100];

function maxNumber(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber(numbers)); */

/* 8 */
/* let arr = [2, 4, 6, 7, true, false, null, undefined];

function calculate(arr) {
    return arr.reduce((sum, value) => {
        if (typeof value === 'number') {
            return sum + value;
        } 
        else if (value === true) {
            return sum + 1;
        } 
        else if (value === false || value === null || value === undefined) {
            return sum + 0;
        } 
        else {
            return sum;
        }
    }, 0);
}

console.log(calculate(arr));  */

/* 2-masala */

/* 1 */
/* let arr = [
    {
        name: "Abdulloh",
        age: 21,
        status: false
    },
    {
        name: "Botir",
        age: 18,
        status: true
    },
    {
        name: "Shokir",
        age: 12,
        status: false
    }
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === false) {
        console.log(arr[i]);
    }
} */

/* 2 */  
/* function calculate(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let input = prompt("1 dan 10 gacha bo'lgan son kiriting:");
let num = Number(input);

if (isNaN(num) || num < 1 || num > 10) {
    console.log("1 dan 10 gacha bo'lgan son kiritmadingiz");
} 
else {
    console.log(`${calculate(num)}`);
} */


/* 5 */  
/* function number() {
    let input = prompt("Son kiriting:");
    let num = Number(input);

    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
number(); */


/* 3-masala */

/* 2 */
/* function onlyones(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let uniqueArray = onlyones(arr);

console.log(uniqueArray); */

/* 4 */
/* let input = prompt("Son kiriting:");
let num = Number(input);

if (isNaN(num)) {
    console.log("To'g'ri son kiriting.");
} 
else {
    let newarray = remove(num);
    console.log(newarray);
}

function remove(number) {
    let arr = [88, 75, 342, 21, 45, 67];
    let index = arr.indexOf(number);

    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
} */



















