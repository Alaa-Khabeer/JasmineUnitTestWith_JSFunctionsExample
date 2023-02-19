
const index = require("../index")
describe("testing math utilities", () => {
  let pos_vals
  let neg_vals
  let vals
  let sum_of_vals

  // at before all assign pos vals with array of positive numbers,
  // and assign negative vals with negative array of numbers,
  
  beforeAll(() =>{
    pos_vals = [2,7,9,4];
    neg_vals = [-1,-3,-5,-2];
    vals = [1,5,6,-4,3,-2];
    sum_of_vals = 9;
  })

  // at before each console.log all val

  beforeEach(() => {
    console.log(pos_vals)
    console.log(neg_vals)
    console.log(vals)
    console.log(sum_of_vals)
  })

  it("sum function should equal to sum of the values", () => {
    expect(index.sum(vals)).toEqual(sum_of_vals)
  });
  it("sum function should concat string values with its initial value", () => {
    expect(index.sum(['a','l','a','a'])).toEqual('0alaa')
  });


  it("If positive function take positive values the result should be the same positive values", () => {
    expect(index.positive(pos_vals)).toBe(pos_vals)
  });
  
  it("If positive function take positive values the result should equal to the same positive values", () => {
    expect(index.positive(pos_vals)).toEqual(pos_vals)
  });

  it("If positive function take negative values the result should not equal to the negative values", () => {
    expect(index.positive(neg_vals)).not.toEqual(neg_vals)
  });

  it("If positive function take negative values the result should equal to empty list", () => {
    expect(index.positive(neg_vals)).toEqual([])
  });

  it("If positive function take positive and negative values the result should equal to only positive values", () => {
    expect(index.positive(vals)).toEqual([1,5,6,3])
  });

  it("the positive function shouldn't accept string values and throw error if at least one value is string", () => {
    expect(function(){
      index.positive(['a',1,'b',-2])
    }).toThrow(new Error("parameter shouldn't be string"))
  });

  // at after each console.log done
   
  afterEach(() =>{
    console.log("done")
    })
 
   // at after all set all variables to 0
   
    afterAll(() => {
     pos_vals = 0;
     neg_vals = 0;
     vals = 0;
     sum_of_vals = 0;  

    console.log(pos_vals)
    console.log(neg_vals)
    console.log(vals)
    console.log(sum_of_vals)
    })
});





