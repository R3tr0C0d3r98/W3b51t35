// const cafe = { 
//     name: "Whitesheep", 
//     seatingCapacity: 100, 
//     hasSpecialOffers: true, 
//     drinks: [ 
//         "Cappuccino", 
//         "Latte", 
//         "Filter coffee",  
//         "Tea", 
//         "Hot chocolate"    
//     ] 
// };

const person = {
    name: "Arran Barker",
    age: "21",
    sayHi() {return ("Hello, my name is " + this.name)
}
};
console.log(person.sayHi())
person["songs"] = [
    "Kishi Bashi - This is the place",
    "Imagine Dragons - Machine"
];

console.log(person.name);
console.log(person["name"]);

// let offer = "none";
// let time = 1200;

// constcafe = { 
//     name: "Whitesheep", 
//     seatingCapacity: 100, 
//     hasSpecialOffers: true, 
//     drinks: [ 
//         "Cappuccino", 
//         "Latte", 
//         "Filter coffee",  
//         "Tea", 
//         "Hot chocolate",    
//     ], 
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly Priced sandwich",
//     noOffer: "Sorry no offer"
// };
// if (time < 1100){ 
//     offer = cafe.breakfastOffer; 
//     console.log(cafe.breakfastOffer); 
// } 
// else if (time < 1500);{
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }


// let day = "Saturday";
// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };
// if (day == "Saturday" || day == "Sunday") {
//     console.log(alarm["weekendAlarm"])
// } else {
//     console.log(alarm["weekdayAlarm"])
// }; 
    
return "Hello my name is ${this.name}";


let eat = "food"
let drink = ""
const pet = {
    name: "Krypto",
    typeOfPet: "Dog",
    age: "1",
    colour: "brown"
}



