function reverseString(str){
    if (str !== 'string'){
        return null
    }
    return str.split("").reverse().join("");

}
function isPalindrome(str){
    if (str===str){
        return true
    }
    else{
        false
    }
    return str.split("").reverse().join("")
}
module.exports = {reverseString, isPalindrome};