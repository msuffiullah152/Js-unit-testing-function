const mathFunction = require("./mathFunction");
describe("mathFunctions that returns the final values of DMAS",()=>{
    test("add(1,2)=>3", ()=>{
        expect(mathFunction.add(1,2)).toBe(3);
    })
    test("subtract(2,2)=>0",()=>{
        expect(mathFunction.subtract(2,2)).toBe(0);
    })
    test ("multiply(1,2)=> 2",()=>{
        expect(mathFunction.multiply(1,2)).toBe(2);
    })
    test("divide(2,0)=>null",()=>{
        expect(mathFunction.divide(2,0)).toBe(null);
    })
})