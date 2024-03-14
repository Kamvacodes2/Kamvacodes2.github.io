'use strict'

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

todoButton.addEventListener("click", displayActivity);
// create a new Date object

let d = new Date();

// call the displayDate() function

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}
function displayActivity() {
    // find out the day of the week
    let dayOfWeek = d.getDay();
    let youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Go out and grind!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }
    // output the value of youShould into the thingToDo div
    document.getElementById("thingToDo").innerHTML =
        youShould;
}

