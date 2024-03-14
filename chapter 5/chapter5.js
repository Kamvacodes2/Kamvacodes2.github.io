

let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt(`Enter a new first thing`);
    item2 = prompt(`Enter a new second thing`);
    item3 = prompt(`Enter a new third thing`);
    updateList();
};

function updateList() {
    document.getElementById('firstThing').innerHTML = item1;
    document.getElementById('secondThing').innerHTML = item2;
    document.getElementById('thirdThing').innerHTML = item3;
}

let name1;
let surname2;


document.getElementById('changeName').onclick = enterFullName;

function enterFullName() {
    name1 = prompt(`Enter your first name`);
    surname2 = prompt(`Enter your last name`);
    document.getElementById('myName').innerHTML = (`${name1}  ${surname2}`);
}