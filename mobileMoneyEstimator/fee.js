//  Prompt user for the amount to send
const input = prompt("Hello! Enter the amount you want to send via mobile money:");

//  Convert the input to a number
const amountToSend = Number(input);

//  Fee calculation constants
const feePercentage = 0.015; // 1.5%
const minFee = 10;
const maxFee = 70;

//  Check for valid numeric input
if (!isNaN(amountToSend) && amountToSend > 0) {
  //  Calculate 1.5% of the amount
  let calculatedFee = amountToSend * feePercentage;

  //  Apply min and max fee rules
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Calculate total amount to be debited
  const totalDebited = amountToSend + calculatedFee;

  //  Print the results
  console.log(`\nTransaction Summary for KES ${amountToSend.toFixed(2)}:`);
  console.log(`Transaction Fee: KES ${calculatedFee.toFixed(2)}`);
  console.log(`Total Debited from Your Account: KES ${totalDebited.toFixed(2)}\n`);
  console.log("Thank you for using Mobile Money Services ");
} else {
  //  Handle invalid input
  console.log("Enter a valid amount greater than 0 to continue.");
}
