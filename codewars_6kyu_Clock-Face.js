// Given the angle (in degrees) of the hour-hand, 
// return the time in 12 hour HH:MM format.
// Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360

// Do not make any AM or PM assumptions for the HH:MM result. 
// They are indistinguishable for this Kata.

// 3 o'clock is 03:00, not 15:00
// 7 minutes past midnight is 12:07
// 7 minutes past noon is also 12:07


const whatTimeIsIt = function(angle) {
    // Your code here
    const clockDegree = 360,
          minuterInHour = 60,
          clockHours = 12,
          clockHoursToMinutes = clockHours * minuterInHour;

    let timeInMinutes = (angle / clockDegree) * clockHoursToMinutes;

    let hours = Math.floor((timeInMinutes / minuterInHour) % clockHours)
    let minutes = Math.floor(timeInMinutes % minuterInHour)
    console.log(minutes)
  if(angle === clockDegree || angle < 30) {
        hours = 12;
    }
    
    if (hours < 10) {
        hours = `0${hours}` 
    } 
    if (minutes < 10) {
        minutes = `0${minutes}`   
    }
        
    return `${hours}:${minutes}`
    
  }

  console.log(whatTimeIsIt(270));


//   console.log((360 / 12) * 6)
//   console.log((180 / 360) * 12)

