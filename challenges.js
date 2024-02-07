/*------------------
1)
The loop is currently printing
the keys of the person object.
Switch it so it is printing
the values instead.
------------------*/
const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true,
};

for (let features in person) {
  console.log(features);
}

/*------------------
2)
Write a loop that prints all the values
in pet: ("Spot", 2, "dog", "brown").
------------------*/

const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
};

/*------------------
3)
Add at least FOUR properties
to the car object.

Then, create a loop that prints
the values of the car object
to the console.
------------------*/
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue"
};

// Adding four more properties
car.engineType = "V6";
car.transmission = "Automatic";
car.mileage = 15000;
car.owner = "John Doe";

for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}


/*------------------
4)
Now, let's print all the features
in ONE statement instead of one at
a time. Using a loop, add each value
to the "carFeatures" string.

Bonus #1: add a comma between each feature
so it more closely resembles a real
sentence when it prints.

Bonus #2: ensure that each feature is comma-separated but the entire sentence ends with a '.'.
For example: 'white, citroen, c1, 2016.'
Hint - For this step you'll need to check if we are on the last key and if so, treat it differently than we did in Bonus #1.  
------------------*/
 let car2 = {
  color: "white",
  make: "citroen",
  model: "c1",
  year: 2016
};

let carFeatures = "";

for (let key in car) {
  carFeatures += car[key];
  if (key !== "year") {
    carFeatures += ", ";
  } else {
    carFeatures += ".";
  }
}

console.log(carFeatures);

/*------------------
5)
Create a loop that adds each
value of the adddress object
to the fullAddress string.
It should print: "Carrer de CodeOp, 42, Barcelona, Spain."
The commas and the dot are bonuses, this is great too: "Carrer de CodeOp 42 Barcelona Spain."
------------------*/

const address = {
  line1: "Carrer de CodeOp",
  line2: 42,
  city: "Barcelona",
  country: "Spain",
};

let fullAddress = "";

for (const key in address) {
  if (address.hasOwnProperty(key)) {
    fullAddress += address[key] + " ";
  }
}

fullAddress = fullAddress.trim() + ".";

console.log(fullAddress);


/*------------------
6)
Write a loop that updates
all values of the address object that are strings to
uppercase.

It should print: "CARRER DE CODEOP 42 BARCELONA SPAIN".
DO USE A LOOP, it's easier not to, but practice makes perfect/better!

Hint: use "typeof" to determine
if the value is a string, and use
".toUpperCase()" to convert the string
to uppercase.
------------------*/
address = {
  street: "Carrer de CodeOp",
  number: 42,
  city: "Barcelona",
  country: "Spain"
};

for (let key in address) {
  if (typeof address[key] === 'string') {
      address[key] = address[key].toUpperCase();
  }
}

console.log(`${address.street} ${address.number} ${address.city} ${address.country}`);

/*------------------
7)
Write a loop that updates
everyone's age by one year.
It should print: {
  pedro: 31,
  sofia: 39,
  mia: 41,
  lucy: 28,
}
------------------*/
let ages = {
  "pedro": 30,
  "sofia": 38,
  "mia": 40,
  "lucy": 27
};

// Updating ages by one year
for (let person in ages) {
  ages[person]++;
}

// Printing updated ages
console.log("{");
for (let person in ages) {
  console.log(`  ${person}: ${ages[person]},`);
}
console.log("}");
/*------------------
8)
Now, do the same thing– but
this time, you'll have to access
age from within each object.

It's already been started for you.
Hint: Use "typeof" to determine
if the feature is a number. If it
is, increase the value by 1.
------------------*/

const groupOfFriends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40,
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27,
  },
};

for (let friend in groupOfFriends) {
  for (let features in groupOfFriends[friend]) {
    console.log(groupOfFriends[friend][features]);
  }
}

/*------------------
9)
Who are the work friends, and who
are the school friends? Create a
loop that populates the two strings.
------------------*/
const workFriendsArray = ["John", "Sarah", "Michael"];
const schoolFriendsArray = ["Emma", "David", "Emily"];

 workFriends = "";
 schoolFriends = "";

for (let i = 0; i < workFriendsArray.length; i++) {
  workFriends += workFriendsArray[i];
  if (i < workFriendsArray.length - 1) {
    workFriends += ", ";
  }
}

for (let i = 0; i < schoolFriendsArray.length; i++) {
  schoolFriends += schoolFriendsArray[i];
  if (i < schoolFriendsArray.length - 1) {
    schoolFriends += ", ";
  }
}

console.log(
  `The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`
);


/*------------------
10)
Loop through the chores object and
add the name of the chore to the
day that it is associated with.
When you are finished, print "mondayChores"
and "wednesdayChores" to the console.

Try to make what you print as natural as possible–
for example: "Monday's chores are: tidying,
vacuuming, bills."

------------------*/
let chores = {
  tidying: "Monday",
  vacuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
};

let mondayChores = [];
let wednesdayChores = [];

// Loop through the chores object
for (let chore in chores) {
  if (chores.hasOwnProperty(chore)) {
    // Add chore to the corresponding day
    if (chores[chore] === "Monday") {
      mondayChores.push(chore);
    } else if (chores[chore] === "Wednesday") {
      wednesdayChores.push(chore);
    }
  }
}

// Print Monday's chores
console.log("Monday's chores are: " + mondayChores.join(", "));

// Print Wednesday's chores
console.log("Wednesday's chores are: " + wednesdayChores.join(", "));
