if (true) {
  var oldMessage = "var is function scoped";
  let newMessage = "let is block scoped";

  console.log(oldMessage);
  console.log(newMessage);
}

console.log(oldMessage);
console.log(newMessage);
