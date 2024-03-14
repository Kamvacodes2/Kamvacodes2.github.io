'use strict'

let carSpeed = 250;
let carPosition = 0;
let animation;

let car = document.getElementById('whip')

car.addEventListener('click', speedUp);

let stop = document.getElementById('stopButton');

stop.addEventListener('click', stopCar);

function speedUp() {
    if (carSpeed > 10) {
        carSpeed -= 70;
    }
    console.log("car speed: " + carSpeed );

    clearInterval(animation);
    animation = setInterval(frame, carSpeed);


    function frame() {
        carPosition += 2;
        car.style.left = carPosition + 'px';
        console.log(carPosition);
        checkPosition(carPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 500) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopCar() {
    if (carPosition < 500) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}