var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s); //   {firstname: 'John', age: 10, lastname: 'Doe'}
