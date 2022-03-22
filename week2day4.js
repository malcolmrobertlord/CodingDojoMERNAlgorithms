//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    encodeStr = ""
    let tempChar = str[0]
    let countChar = 1;
    //Edge case of just 1 character or empty
    if(str.length <= 1){
        return str + str.length;
    }
    for (let i = 1; i<str.length; i++){
        // checks if character is the same as previous character
        if (str[i] === tempChar) {
                countChar ++;
            }
        else {
            // add the previous character and count, reset counter and set new temp character
            encodeStr += tempChar + countChar;
            tempChar = str[i];
            countChar = 1;
        }
    }
    // add last character and count
    encodeStr += tempChar + countChar;
    return encodeStr;
}

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));


//Second Algo:
//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let newStr = ""; //will be string we return
    let numStr = ""; //keeps track of the current numbers
    let letter = ""; //keeps track of the current letter
    for(let i = 0; i <= str.length; i++){
        //checks if not a number
        if(isNaN(str[i])){
            //checks if we have captured number string yet
            if(numStr != ""){
                //finished capturing numbers and letter, add to to new string
                for(let j = 0; j < parseInt(numStr); j++){
                    newStr += letter;
                }
            }
            //reset number string and set new letter  
            numStr = "";
            letter = str[i];
        }
        //if it is a number, add to number string 
        else{
            numStr += str[i];
        }
    }
    return newStr;
}

console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));

