let globalValue = 100;

function showExecutionContext() {
  let localValue = 50;
  console.log("Execution Context:", globalValue + localValue);
}

showExecutionContext();
console.log("Example 1:", a);
var a = 10;
let b = 20;

// Example 3: function hoisting
sayHello();
function sayHello() {
  console.log("Example 3: Hello");
}


// Example 4: arrow function hoisting
const sayHi = () => {
  console.log("Example 4: Hi");
};

  // TASK 2: Counter Using Closures
function createCounter() {
  let count = 0; // preserved by closure

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3

  // TASK 3: Scope Behavior (with Comments)

let globalVar = "Global Scope";

function scopeDemo() {
  let functionVar = "Function Scope";

  if (true) {
    let blockVar = "Block Scope";
    var varScope = "Var Scope";

    console.log(globalVar);    //  Global variable accessible
    console.log(functionVar);  //  Function variable accessible
    console.log(blockVar);     //  Block variable accessible
    console.log(varScope);     //  var is function scoped
  }
  console.log(varScope);       // Accessible due to var
}

scopeDemo();

