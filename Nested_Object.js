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


function iterateNestedObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // If the property is an object, recursively call iterateNestedObject
        iterateNestedObject(obj[key]);
      } else {
        // If the property is not an object, do something with it
        console.log(key + ': ' + obj[key]);
      }
    }
  }
}

// Example nested object
const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
};

// Call the function with the nested object
iterateNestedObject(nestedObj);
