// Helper function to calculate the square of a number
function square(num) {
    return num * num;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Main function to perform some operations
  function main() {
    // Calculate the square of 5
    let result = square(5);
    console.log("Square of 5:", result);
  
    // Check if 10 is even
    if (isEven(10)) {
      console.log("10 is even");
    } else {
      console.log("10 is odd");
    }
  }
  
  // Call the main function to run the code
  main();
  