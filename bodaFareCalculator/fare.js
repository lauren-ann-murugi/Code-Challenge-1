// Prompt the user to enter the trip distance in kilometers
const input = prompt("Habari!  Enter your distance in kilometers of your boda boda trip:");

//  Convert the input to a number
const distanceInKm = Number(input);

//  Fare Calculation Constants
const baseFare = 50;         // Flat fee for every ride
const chargePerKm = 15;      // Cost per kilometer

//  Check if input is valid
if (!isNaN(distanceInKm) && distanceInKm >= 0) {
  //  Calculate total fare
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  // Display the result in a friendly message
  console.log(`\n Estimated Boda Boda fare for ${distanceInKm} km is:`);
  console.log(`KES ${totalFare.toFixed(2)}\n`);
  console.log("Have a safe ride! ");
} else {
  // Handle invalid input
  console.log("Oops! Enter a valid distance in kilometers. ");
}
