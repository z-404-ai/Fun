class Car {
constructor(model, key) {
this.model = model; 
  this.key = key;
}; 

  start(key) {
   if (key !== this.key) throw new Error("Invalid");
    console.log("vrooom!!!");
  }; 

  close(key) {
  if (key !== this.key) throw new Error("Invalid");
    console.log("Shutting down"); 
  }
}; 

const bmw = new Car("bmw", 12345);

bmw.start().close();
