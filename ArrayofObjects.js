let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "brown",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },

  {
    color: "red",
    type: "Volkswagon mini",
    registration: new Date("2018-03-03"),
    capacity: 7,
  },
];

// Add a car at the beginning of the array

let car1 = {
  color: "red",
  type: "cabrio",
  registration: new Date("2016-05-02"),
  capacity: 2,
};

cars.unshift(car1);

// Add a car at the end of the array

let car2 = {
  color: "green",
  type: "ferrari",
  registration: new Date("2016-05-02"),
  capacity: 4,
};

cars.push(car2);

// Add a car at the 5th position

let car3 = {
  color: "yellow",
  type: "tesla",
  registration: new Date("2016-05-02"),
  capacity: 6,
};

cars.splice(2, 0, car3);

// Find first matching value

let redcar = cars.find((car) => car.color === "red");

// Find all the matching values

let redcars = cars.filter((car) => car.color === "red");

// Transform objects of an Array

let sizes = cars.map((car) => {
  if (car.capacity <= 3) {
    return "small";
  } else if (car.capacity > 3 && car.capacity < 5) {
    return "medium";
  } else {
    return "large";
  }
});

// Add property to every object of the array

cars.forEach((car) => {
  //car["size"] = "large";
  if (car.capacity > 3 && car.capacity <= 5) {
    car["size"] = "medium";
  } else if (car.capacity <= 3) {
    car["size"] = "small";
  } else {
    car["size"] = "large";
  }
});

// Sorting the array based on capacity

let sortedcars = cars.sort((c1, c2) =>
  c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);

console.log(cars);
console.log(redcar);
console.log(redcars);
console.log(sizes);
console.log(sortedcars);
