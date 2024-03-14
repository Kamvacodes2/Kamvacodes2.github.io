'use strict'

let dreamCar = {
    make: "Mercedes-Benz",
    model: "280 SL Pagoda",
    color: "#f0f8ff",
    year: 1967,
    bodyStyle: "Luxury Car",
    price: 8000
   };

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById('modelyear').innerHTML = dreamCar.year;
document.getElementById('body').style.backgroundColor = dreamCar.color;
document.getElementById('body').innerHTML = `${dreamCar.make} ${dreamCar.model}`