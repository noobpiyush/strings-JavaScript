function capital(str) {
    let newStr = str.split(" ");
    for (let index = 0; index < newStr.length; index++) {
        newStr[index] = newStr[index].charAt(0).toUpperCase() + newStr[index].slice(1);
    }

    return newStr.join(' ');
} 

let str = "hello world";

let newStr = capital(str);

console.log(newStr);