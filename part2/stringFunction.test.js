const stringFunction = require("./stringFunction");
describe("reversing the function and palindrome", ()=>{
    test("reverseString(word)=>drow",()=>{
        expect(stringFunction.reverseString('word')).toBe('drow');

    });
    test("isPalindrome(madam)=>true",()=>{
        expect(stringFunction.isPalindrome('madam')).toBe(true);
    });

})