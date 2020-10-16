function Person(initialAge) {
  var age;

  if (initialAge > 0) {
    age = initialAge;
  } else {
    age = 0;
    console.log("Age is not valid, setting age to 0.");
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    console.log(
      age < 13
        ? "You are young."
        : age >= 13 && age < 18
        ? "You are a teenager."
        : "You are old."
    );
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age++;
  };
}
