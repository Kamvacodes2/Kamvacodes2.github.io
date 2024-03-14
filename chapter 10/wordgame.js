'use strict'

let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click",replaceIt);

function replaceIt() {
    let storyDiv = document.getElementById("story");
    let adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";
    let verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
    let roomInHouse = "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
    let color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
    let nounPlural = "<span class='replacement'>"+ document.getElementById("nounPlural").value + "</span>";
    let pastVerb = "<span class='replacement'>"+ document.getElementById("pastVerb").value + "</span>";
    let beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
    let musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
    let diffRoom = "<span class='replacement'>"+ document.getElementById("diffRoom").value + "</span>";
    let exclamation = "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
    let pastVerb2 = "<span class='replacement'>"+ document.getElementById("pastVerb2").value + "</span>";
    let adjDance = "<span class='replacement'>"+ document.getElementById("adjDance").value + "</span>";
    let animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
    let city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
    let verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>";
    /* Insert more variable definitions here */
    let theStory;
    theStory = "<h1>Kamva's Dance Party</h1>";
    theStory += "One " + adj1 + " day,"
    theStory += " Kamva was " + verbIng;
    theStory += " in his " + roomInHouse;
    theStory += ", reading a book about " + color;
    theStory += " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb;
    theStory += " his " + beverage;
    theStory += ", he heard " + musicType;
    theStory += " music playing in the " + diffRoom + ".<br><br>";
    theStory += exclamation + "! he exclaimed, as he ";
    theStory += pastVerb2 + " down the stairs to join the ";
    theStory += adjDance + " party.<br><br>";
    theStory += "Kamva danced the " + animal;
    theStory += " Dance, the " + city + " Shake,";

    /* Put the rest of the story here, using the += operator */
    storyDiv.innerHTML = theStory;
}