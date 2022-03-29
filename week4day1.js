// Binary to Decimal
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21
const binaryToDecimal = (binary) => {
    //decimal is what we will return, exponent will help us keep track of what power we are on
    let decimal = 0;
    let exponent = 0;
    //for loop starting at right side of string going backwards
    for (let i=binary.length-1; i>=0; i--){
        // console.log("this is i " + i)
        if (binary[i] == 0) {
            exponent++;
            continue;
        }
        else if (binary[i] == 1){
            //math.pow has base, then exponent as parameters
            decimal += Math.pow(2,exponent)
            exponent++;
            // console.log(decimal)
        }
    }
    return decimal
}

// console.log(binaryToDecimal("1101101"))
// console.log(binaryToDecimal("100"))
// console.log(binaryToDecimal("10101"))


  // Decimal to Binary
  // Given a (whole) number, return the value in binary

const decimaltobinary = (str) => {
    var x = 0;
    var binary = "";
    while (Math.pow(2,x) < str){
        x++;
    }
    while (str >= 0 && x >= 0){
        if (Math.pow(2,x) <= str){
            str -= Math.pow(2,x);
            x--;
            binary += "1";
        }
        else{
            binary += "0";
            x--;
        }

    }
    return binary;
}


console.log(decimaltobinary("109"))
console.log(decimaltobinary("4"))
console.log(decimaltobinary("21"))

  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"

  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work