// Create a scenario!

// You are in Alice in Wonderland world amd are setting up the table for the tea party! There are 10 guests that will arrive soon.
// You need to make sure every guest has a tea cup, tea plate, and a dessert.

// let guests = [
//   {
//     firstName: "Jose",
//     lastName: "Ruvalcaba",
//     species: "Human",
//   },
// ];

// Expected Outcome

// {
//     firstName: "Jose",
//     lastName: "Ruvalcaba",
//     species: "Human",
//     teaCup:true,
//     teaCupColor: Blue;
//     teaPlate:true,
//     teaPlateColor: Blue;
//     smallDessert: Cheesecake
// }

// Define the items needed for each guest
// let partyStuff = ["cup of green tea", "tea plate", "ice cream cake"];

// let cycleFirstNames = [
//   "Jose",
//   "Milton",
//   "Faitou",
//   "Law",
//   "Luz",
//   "Marcelis",
//   "Va",
//   "Toua",
//   "Carmen",
//   "Luciano",
//   "Derris",
//   "Hernan",
//   "London",
// ];

// let cycleLastNames = [
//   "Ruvalcaba",
//   "Scott III",
//   "Lor",
//   "Moua",
//   "Mercado",
//   "Edwards",
//   "Moua",
//   "Vue",
//   "Valdivia",
//   "Salinas",
//   "Sylvester",
//   "Mercado",
//   "Womack",
// ];

// for (let i = 0; i < cycleFirstNames.length; i++) {
//   console.log(`${cycleFirstNames[i]} ${cycleLastNames[i]}:`);
//   for (let z = 0; z < partyStuff.length; z++) {
//     console.log(`- ${partyStuff[z]}`);
//   }
// }

let cycleFirstNames = [
  "Jose",
  "Milton",
  "Faitou",
  "Law",
  "Luz",
  "Marcelis",
  "Va",
  "Toua",
  "Carmen",
  "Luciano",
  "Derris",
  "Hernan",
  "London",
];

let cycleLastNames = [
  "Ruvalcaba",
  "Scott III",
  "Lor",
  "Moua",
  "Mercado",
  "Edwards",
  "Moua",
  "Vue",
  "Valdivia",
  "Salinas",
  "Sylvester",
  "Mercado",
  "Womack",
];

let cupColors = [
  "Blue",
  "Red",
  "Yellow",
  "Green",
  "Purple",
  "Black",
  "White",
  "Orange",
  "Pink",
  "Brown",
  "Grey",
  "Teal",
  "Beige",
];

let dessertOptions = [
  "Cheesecake",
  "Ice Cream Cake",
  "Carrot Cake",
  "Red Valvet",
  "Chocolote Cake",
  "Vanilla Cake",
  "Cookies",
  "Brownies",
  "Carrot Cake",
  "Strawberry Cake",
  "Superman Ice Cream",
  "Apple pie",
  "Lemon pie",
];

let guests = [];

for (let i = 0; i < cycleFirstNames.length; i++) {
  let guest = {
    firstName: cycleFirstNames[i],
    lastName: cycleLastNames[i],
    species: "Human",
    teaCup: cupColors[i],
    teaPlate: true,
    dessertOptions: dessertOptions[i],
  };
  guests.push(guest);
}

console.log(guests);
