//  Prompt the user to enter how many cups of chai they want
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");

//  Convert the user input from string to number
const numberOfCups = Number(input);

//  Check if the input is a valid number
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  // Calculate the required ingredients
  const water = numberOfCups * 150;         // Water: 150ml per cup
  const milk = numberOfCups * 100;           // Milk: 100ml per cup
  const teaLeaves = numberOfCups * 1;       // Tea leaves: 1 tbsp per cup
  const sugar = numberOfCups * 2;           // Sugar: 2 tsp per cup

  //  Output the result to the console
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora! `);
} else {
  //  If input was invalid
  console.log("Oops! Please enter a valid number of cups. ");
}





