// 01 What will be the output 
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();

// ans [undefined]

// 02  What will be the output
var y = 1;
if (function f(){}) {
  y += typeof f;
}
// console.log(y);

// [1undefiend]

// 03 what will be the output 
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
  }
//   console.log(typeof bar());
//   [function]
// 04 what will be the output 
function baz() {
    console.log(c);
    let c = 20;
  }
//   baz();

// [ referenceError]  
// 05 what will be the output based question
console.log([] + []);
//  [undefiend]

// 05  Variable Declarations and Scope:
function test() {
    var a = 1;
    if (true) {
      var a = 2;
      console.log(a);
    }
    console.log(a);
  }
  test();
//   [2,2]

// 06 closures what will be the output 
function outer() {
    var a = 10;
    function inner() {
      console.log(a);
    }
    return inner;
  }
  var closure = outer();
  closure();
//   [10]

// 07 this keyword what will be the output
var obj = {
    name: 'John',
    getName: function() {
      console.log(this.name);
    }
  };
  var getName = obj.getName;
  getName();
  
//   [undfiend]

// 08 Prototypes and Inheritance: what will be the output

function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = function() {
    return this.name;
  };
  var john = new Person('John');
  console.log(john.getName());

//   [john]
  

  