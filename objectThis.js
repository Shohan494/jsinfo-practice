let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name);
  }

};

function sayHi(){
  alert("Global This");
}

user.sayHi(); // John
this.sayHi(); //Global This
