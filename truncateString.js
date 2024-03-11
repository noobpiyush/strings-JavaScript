function truncateString(str,num) {
    let newStr = str.slice(0,num) + "...";
    return newStr
}

let str = "Hello World Javascript"
let newStr = truncateString(str,10);
console.log(newStr);