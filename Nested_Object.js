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

  const logNestedObject = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        logNestedObject(obj[key]);
      } else {
        console.log(key, obj[key]);
      }
    }
  };

  logNestedObject(nestedObject);

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

  // rewrite iterateNestedObject without using hasOwnProperty
  function iterateNestedObject(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        iterateNestedObject(obj[key]);
      } else {
        console.log(key, " ",  obj[key]);
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
