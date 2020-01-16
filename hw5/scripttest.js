let user = {
  // firstName: "John",
  // lastName: "Doe",
}
user.getName = function () {
  this.age = "20";
  console.log(user);
}

user.getName()