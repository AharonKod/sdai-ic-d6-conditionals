// all code for this lab to be completed in this file
let currentTemperature = 70

//is the temp freezing?
if(currentTemperature >= 32) {
    console.log("i.m not freezinf. Thank ga")
} else {
    console.log("Get me out of here! its freeeeeeeeeeeeeezing!!!")
}


function compareAges() {
    let agePerson1 = 25;  // Age of the first person
    let agePerson2 = 30;  // Age of the second person
    let agePerson3 = 22;  // Age of the third person
    let agePerson4 = 30;  // Age of the fourth person

    // Comparing Person 1
    if (agePerson1 > agePerson2 && agePerson1 > agePerson3 && agePerson1 > agePerson4) {
        console.log("Person 1 is the oldest.");
    } else if (agePerson1 < agePerson2 && agePerson1 < agePerson3 && agePerson1 < agePerson4) {
        console.log("Person 1 is the youngest.");
    } else {
        console.log("Person 1 is neither the oldest nor the youngest.");
    }

    // Comparing Person 2
    if (agePerson2 > agePerson1 && agePerson2 > agePerson3 && agePerson2 > agePerson4) {
        console.log("Person 2 is the oldest.");
    } else if (agePerson2 < agePerson1 && agePerson2 < agePerson3 && agePerson2 < agePerson4) {
        console.log("Person 2 is the youngest.");
    } else {
        console.log("Person 2 is neither the oldest nor the youngest.");
    }

    // Comparing Person 3
    if (agePerson3 > agePerson1 && agePerson3 > agePerson2 && agePerson3 > agePerson4) {
        console.log("Person 3 is the oldest.");
    } else if (agePerson3 < agePerson1 && agePerson3 < agePerson2 && agePerson3 < agePerson4) {
        console.log("Person 3 is the youngest.");
    } else {
        console.log("Person 3 is neither the oldest nor the youngest.");
    }

    // Comparing Person 4
    if (agePerson4 > agePerson1 && agePerson4 > agePerson2 && agePerson4 > agePerson3) {
        console.log("Person 4 is the oldest.");
    } else if (agePerson4 < agePerson1 && agePerson4 < agePerson2 && agePerson4 < agePerson3) {
        console.log("Person 4 is the youngest.");
    } else {
        console.log("Person 4 is neither the oldest nor the youngest.");
    }
}

// Call the function to run the comparison
compareAges();



function compareDays() {
    let monday = 5;    // Example value for Monday
    let tuesday = 8;   // Example value for Tuesday
    let wednesday = 3; // Example value for Wednesday
    let thursday = 6;  // Example value for Thursday
    let friday = 7;    // Example value for Friday
    let saturday = 2;  // Example value for Saturday
    let sunday = 4;    // Example value for Sunday

    let days = [
        { day: "Monday", value: monday },
        { day: "Tuesday", value: tuesday },
        { day: "Wednesday", value: wednesday },
        { day: "Thursday", value: thursday },
        { day: "Friday", value: friday },
        { day: "Saturday", value: saturday },
        { day: "Sunday", value: sunday }
    ];

    // Finding the maximum value
    let maxDay = days[0];
    for (let i = 1; i < days.length; i++) {
        if (days[i].value > maxDay.value) {
            maxDay = days[i];
        }
    }
    console.log(`${maxDay.day} has the highest value of ${maxDay.value}.`);

    // Finding the minimum value
    let minDay = days[0];
    for (let i = 1; i < days.length; i++) {
        if (days[i].value < minDay.value) {
            minDay = days[i];
        }
    }
    console.log(`${minDay.day} has the lowest value of ${minDay.value}.`);

    // Checking if any days have the same value
    let sameValueDays = [];
    for (let i = 0; i < days.length; i++) {
        for (let j = i + 1; j < days.length; j++) {
            if (days[i].value === days[j].value) {
                sameValueDays.push(`${days[i].day} and ${days[j].day}`);
            }
        }
    }
    if (sameValueDays.length > 0) {
        console.log(`The following days have the same value: ${sameValueDays.join(", ")}.`);
    } else {
        console.log("No days have the same value.");
    }
}

// Call the function to run the comparison
compareDays();

