function showMessage(from, text = anotherFunction()) {
  alert( from + ": " + text );
}

function anotherFunction(){
 let a = 2;
 return a;
}

showMessage("result");
