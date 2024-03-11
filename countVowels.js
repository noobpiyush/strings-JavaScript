function countVowvels(str){
    // let arr = ['a','e','i','o','u'];

    str = str.toLowerCase();
    let cnt = 0;
    for(let i =0;i<str.length;i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            cnt++;
        }
    }
    return cnt;
}

let str = "Hello World";
console.log(countVowvels(str)); // Output: 3