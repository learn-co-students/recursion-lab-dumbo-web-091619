// Code your solution here!

function printString (string){
    //    string.split('').forEach(letter => console.log(letter))
    console.log(string[0])
    if (string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
    } else {
        return true
    }
}


function reverseString(string) {
    if (string.length < 2) {
      return string;
    } else {
      return reverseString(string.substring(1)) + string[0];
    }
  }

function isPalindrome(string){
    if(string.length < 2){
        return true
    } else if (string[string.length-1] === string[0]){
        return isPalindrome(string.substring(1, string.length-1))
    } else {
        return false
    }
}

function addUpTo(arr, index){
    return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr){
    if(arr.length < 2){
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, num){
    if(!arr.length){
        return false
    } else if (arr[0] === num){ 
        return true
    }else {
        return includesNumber(arr.slice(1), num)
    }
}