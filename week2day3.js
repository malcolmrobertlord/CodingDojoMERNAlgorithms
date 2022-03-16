//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    //set new string variable
    //for loop starting at end to beginning of string
        //conditional to check if character is in our new string yet
            

    //Sets new string to equal last character to create length of 1
    let newStr = (str[str.length-1])
    //loop starting at back
    for (let i = str.length-1; i >= 0; i--){
        //set boolean
        let inStr = false
        //for loop to check if character is already in newStr
        for(j=0; j < newStr.length; j++){
            if(str[i] === newStr[j]) {
                inStr = true
                break;
            }
        }
        if (!inStr) {
            newStr = str[i] + newStr
        }
    }
    return newStr
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));


///ALTERNATE SOLUTION using objects

const newDedupe = (str) => {
    const letters = {};
    let newStr = "";
    for (let i = str.length -1; i >=0; i--) {
        if (!letters[str[i]]){
            console.log(`found new letter: ${str[i]}`)
            newStr = str[i] + newStr;
            letters[str[i]] = true;
        }
        else {
            console.log(`found old letter: ${str[i]}`)
        }
    }
    console.log(letters);
    return newStr;
}

console.log(newDedupe("Snaps! crackles! pops!"));
console.log(newDedupe("scoop dedupe!"));