let greetingString;
let username = "Ivan";
let greeting = "";
for (let i = 0; i < 4; i++) {
  if (i != 2) {
    greetingString = "Happy birthday" + " to you";
  } else {
    greetingString = "Happy birthday" + " dear " + username;
  }
  greeting = `${greeting}  ${greetingString} \n`;
}
alert(greeting);