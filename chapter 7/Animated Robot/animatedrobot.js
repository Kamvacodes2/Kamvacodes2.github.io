'use strict'

let rightEye = document.getElementById('righteye');

let leftEye = document.getElementById('lefteye');

rightEye.addEventListener('click',moveUpDown);

function moveUpDown(e) {
let robotPart = e.target;
let top = 0

let id = setInterval(frame, 30) // draw every 10 ms

function frame(){
    robotPart.style.top = top + '%';
    top ++;
    if (top === 20) {
        clearInterval (id);
    };
};

};

leftEye.addEventListener('click',moveUpDown);

let leftArm = document.getElementById('leftarm')

leftArm.addEventListener('click', moveLeftRight);

function moveLeftRight(e) {
    let robotArm = e.target;
    let left = 0;

    let id = setInterval(armFrame, 30);

    function armFrame () {
        robotArm.style.left = left + '%';
        left ++;
        if (left === 70) {
            clearInterval(id)
        };
    };

};

let rightArm = document.getElementById('rightarm');

rightArm.addEventListener('click', rotateArm);

    function rotateArm(e) {
        let roboArm = e.target;
        let wave = 0

        let rotateAnimation = setInterval(rotateArm1, 10)

        function rotateArm1 () {
            roboArm.style.transform = `rotate(${wave}deg)`
            wave ++;
            if (wave === 90) {
                clearInterval(rotateAnimation)

                let rotateBackAnimation = setInterval(rotateBack, 15)

                function rotateBack () {
                    roboArm.style.transform = `rotate(${wave}deg)`
                    wave --;
                    if (wave === 0) {
                        clearInterval(rotateBackAnimation)
                    }
                }
            }
        }
    }


let nose = document.getElementById('nose');

nose.addEventListener('click', moveNoseUp);

function moveNoseUp(event) {
    let robotNose = event.target
    let shift = 0

    let noseAnimation = setInterval(noseFrame, 20);

    function noseFrame() {
        robotNose.style.top = shift + "%"
        shift ++;
        if (shift === 50) {
            clearInterval(noseAnimation);
        }
    }
}

let mouthAw = document.getElementById('mouth')

mouthAw.addEventListener('click', mouthInAw);

function mouthInAw (event) {
    let roboMouth = event.target;
    let mouthRange = 65;
    let mouthTarget = 20

    let mouthAnimation = setInterval(surpriseMouth, 15);

    function surpriseMouth() {
        roboMouth.style.width = mouthRange -- + "%" 
        roboMouth.style.borderRadius = mouthRange++ + "%"
    }
}