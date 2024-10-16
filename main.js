function add(a,b){
        console.log (arguments.a);
    } // what is the real life usage of this? explain with example. // good job, 9/10
    add(10,15)
    function addAll() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    
    console.log(addAll(1, 2, 3));      
    console.log(addAll(4, 5, 6, 7));   
    console.log(addAll(10));          
    console.log(addAll()); 
    
    const Foo = () => {};
    const foo = new Foo(); // TypeError: Foo is not a constructor
    console.log("prototype" in Foo); // false. 
    //Define a base prototype object
    const animal = {
      type: 'Unknown',
      makeSound() {
        console.log('Some generic animal sound');
      }
    };
    
   // Create a new object `dog` that inherits from `animal`
    const dog = Object.create(animal);
    dog.breed = 'Golden Retriever';
    
    // Check for properties using the `in` operator
    console.log('breed' in dog);    
    console.log('type' in dog);      
    console.log('makeSound' in dog); 
    console.log('age' in dog);       
    
   // what is a constructor (0/10) and what then what is the new key word and then what do they do when they come together i.e. new Constructor()
   // what does the keyword "in" mean in console.log("abc" in xyz) // good job. 7.5/10
    // Using a constructor function
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // const john = new Person("John", 30);
    const jane = new Person("Jane", 25);
    
    console.log(john.name); 
    console.log(jane.name); 
    
    // let person = {
    //   name: 'bisma',
    //   age: '19',
    // }
    
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //   }
    
    
      const john = new Person('John', 30);
      console.log(john.name); 
      console.log(john.age); 
    
    const perrson = {
      name: 'John',
      sayHello() { //#n2
        console.log(`Hello, my name is ${this.name}.`);
      },// Q: kia aaray ka method hua karta ka nai?
    };
    Array.prototype.double = function() {
      return this.map(num => num * 2);
    };
    
    
    const numbers = [1, 2, 3, 4];
    const doubledNumbers = numbers.double();
    console.log(doubledNumbers); 
    perrson.sayHello(); 
    
      const persons = {
        name: 'John',
        sayHello: () => {
          console.log(`Hello, my name is ${this.name}.`);
        },
      };
      persons.sayHello();
    // what is the 'this' keyword in JS?
    // what is an object in JS?
    // what is the key and value in  #n2
    
    
    
    // Question: why not "bisma" and/or "shiza" instead of "john"
      const personn = {
        name: 'John',
        greet: function() {
            const name = 'bisma';
          console.log(`Hello, my name is ${this.name}.`);
    
          const innerArrow = () => {
            const name = 'shiza'
            console.log(`Hello again, my name is ${this.name}.`);
          };
    
          innerArrow();
        },
      };
    
      personn.greet();
    
    
    
    // Question:
    const name = 'shiza'
    const innerArrow = () => {
        console.log(`Hello again, my name is ${this.name}.`);
    };
    
    innerArrow();
    
    
    
    
    const person = {
        name: 'John Doe',
        greet: () => {
          console.log(`Hello, my name is ${this.name}.`);
        }
      };
    
      person.greet();
    
      const personnn = {
        name: 'John Doe',
        greet: function() {
          console.log(`Hello, my name is ${this.name}.`);
        }
      };
    
      personnn.greet(); 
    // is 'in' come in arrays? //what is array? //in which data structure 'in' is being use
    const fruits = ['apple', 'banana', 'cherry'];
    
    
    console.log(1 in fruits);  
    
    
    console.log(3 in fruits);  
    
    
    
    if (true) {
    
      function add(a, b) {
        return a + b;
      }
    
    }
    
    console.log(add(2, 3));
    
    
    if (true) {
    let c = 7;
      function add(a, b) {
        return c;
      }
    
    }
    
    console.log(c);
    
    function init() {
      var name = "Mozilla"; 
      function displayName() {
      
        console.log(name); 
      }
      displayName();
    }
    init();
    
    function Animal(name) {
      this.name = name;
    }
    
    Animal.prototype.eat = function() {
      console.log(`${this.name} is eating.`);
    };