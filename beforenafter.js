//Declaration
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

//Expression
let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

sayHi("shohan");
