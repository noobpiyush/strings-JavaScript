function removeDuplicates(str){

    let seen = {};

    let result = "";

    for(let i =0;i<str.length;i++){
        if (!seen[str[i]]) {
            result += str[i];
            seen[str[i]] = true;
        }
       
    }
    return result;
}

let string = "piyusuh"

let newStr = removeDuplicates(string) 
console.log(newStr);