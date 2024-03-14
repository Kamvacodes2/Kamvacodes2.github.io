'use strict'

let day = prompt(`Enter your favorite day of the week`).toLowerCase();

let theResponse;

switch (day) {
    case "monday":
        theResponse = 'Ugh'
        break;

    case 'tuesday':
        theResponse = 'Taco day!'
        break;
    
    case 'wednesday':
        theResponse = 'Halfway there'
        break;
    
    case 'thursday':
        theResponse = 'Its puza Thursday!!!'
        break;
    
    case 'friday':
        theResponse = 'Its FriYay EveryBody!!!'

    case "Saturday":
        theResponse = "What a day!";
        break;

    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
            
    default:
        theResponse = "I haven’t heard of that one!";
        break
};

alert(theResponse)