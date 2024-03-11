function revserseString(str) {
    if (str.length == 0 || str.length == 1) {
        return str;
    }

    let strArr = str.split('');

    let i =0;
    let j = str.length - 1;

    while (i < j) {
        swap(strArr,i,j);
        i++;
        j--;
    }

    return strArr.join('');
}

function swap(strArr,i,j){
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
}

let str = "piyush";

let newStr = revserseString(str);

console.log(newStr);