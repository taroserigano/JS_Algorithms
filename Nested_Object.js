const nestedObject = {
  "name": "John Doe",
  "age": 30,
  "occupation": "Software Engineer",
  "address": {
    "street": "123 Main Street",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105"
  }
};

// Iterate over the nested object using a for...in loop
for (const key in nestedObject) {
  // Check if the value of the key is an object
  if (typeof nestedObject[key] === "object") {
    // Iterate over the nested object using a nested for...in loop
    for (const nestedKey in nestedObject[key]) {
      console.log(nestedKey, nestedObject[key][nestedKey]);
    }
  } else {
    // The value of the key is not an object, so log it out
    console.log(key, nestedObject[key]);
  }
}
