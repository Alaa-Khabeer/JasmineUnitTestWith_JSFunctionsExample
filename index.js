
 function sum(vals) {
    let sum = 0;

    vals.forEach((val) => {
      sum += val;
    });

    return sum;
  }

 function positive(vals) {
    let type = ""
    for(let val of vals){
      if (typeof val === "string"){
        type = "string"
      }  
    }
    if (type === "string"){
      throw new TypeError("parameter shouldn't be string")
    }
    return vals.filter((x) => {
      return x > 0;
    });
  }

module.exports = {sum, positive};