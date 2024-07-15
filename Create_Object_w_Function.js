const myObject = {
  name: 'John Doe',
  age: 30,
  greet: function (){ 
      return this.name + this.age
  }
};

// Using the object
console.log(myObject.greet())
