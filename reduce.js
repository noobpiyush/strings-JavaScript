const numbers = [1, 2, 3, 4, 5];

let initialVal = 0;
let ans = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(ans);