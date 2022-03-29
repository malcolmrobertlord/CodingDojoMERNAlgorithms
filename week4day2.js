//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    let decimal = 0;
    let exponent = 0;
    //for loop starting at right side of string going backwards
    for (let i=str.length-1; i>=0; i--, exponent++){
        // console.log(decimal)
        if (str[i] == 0) {
            continue;
        }
        else if (str[i] >= 1 && str[i] <= 9){
            //math.pow uses parameters of base, then exponent
            decimal += str[i] * Math.pow(16,exponent)
        }
        else if(str[i] ==="A"){
            decimal += 10 * Math.pow(16,exponent)
        }
        else if(str[i] ==="B"){
            decimal += 11 * Math.pow(16,exponent)
        }
        else if(str[i] ==="C"){
            decimal += 12 * Math.pow(16,exponent)
        }
        else if(str[i] ==="D"){
            decimal += 13 * Math.pow(16,exponent)
        }
        else if(str[i] ==="E"){
            decimal += 14 * Math.pow(16,exponent)
        }
        else if(str[i] ==="F"){
            decimal += 15 * Math.pow(16,exponent)
        }
    }
    return decimal
}


// console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
    var digits = 0;
    var hex = "";
    while (Math.pow(16,digits) < val){
        digits++;
    }
    exponent = digits - 1
    let i = 16;
    while (val > 0){
        if (val >= i * Math.pow(16,exponent)) {
            val -= i * Math.pow(16,exponent);
            // console.log(val)
            if (i>=0 && i<=9){
                hex+= i;
            }
            else if (i === 10){
                hex+= "A"
            }
            else if (i === 11){
                hex+= "B"
            }
            else if (i === 12){
                hex+= "C"
            }
            else if (i === 13){
                hex+= "D"
            }
            else if (i === 14){
                hex+= "E"
            }
            else if (i === 15){
                hex+= "F"
            }
            if (exponent>=0){
                exponent--;
            }
        }
        else {
            i--;
        }
    }
    return hex
}

console.log(decToHexStr(108));
// console.log(decToHexStr(420));