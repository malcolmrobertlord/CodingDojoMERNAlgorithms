//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    //initalize angles
    let hourAngle = 0;
    let minuteAngle = 0;
    let angleBetween = 0;

    //getting minutes past midnight/noon (anything above 720 is resetting clock to midnight/moon)
    minutes = minutes % 720
    // console.log(minutes)

    //each hour is 30 degrees, so 30/60minutes it moves by .5 per minute. multiply hours moved by .5 to get the angle
    hourAngle = minutes * 0.5
    // console.log(hourAngle)

    //calculate how many minutes past the hour using modulo
    //each minute is 360/60 = 6 degrees so multiply minutes past by 6
    minutesPastHour = minutes % 60;
    minuteAngle = minutesPastHour * 6
    // console.log(minuteAngle)
    
    //making sure angle is positive by finding which angle is greater
    if (hourAngle > minuteAngle){
        angleBetween = hourAngle - minuteAngle
    }
    else {
        angleBetween = minuteAngle - hourAngle
    }
    return angleBetween
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));