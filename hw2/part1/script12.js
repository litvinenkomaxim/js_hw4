let lang = prompt("enter lang", 'ru');
let day = prompt("enter day", '2');

switch (true) {
  case lang == 'ru':
    switch (true) {
      case day == 0:
        alert("воскресенье");
        break;
      case day == 1:
        alert("понедельник");
        break;
      case day == 2:
        alert("вторник");
        break;
      case day == 3:
        alert("среда");
        break;
      case day == 4:
        alert("четверг");
        break;
      case day == 5:
        alert("пятница");
        break;
      case day == 6:
        alert("суббота");
        break;
      default:
        alert('дата неверная');
    }
    break;
  case lang == 'en':
    switch (true) {
      case day == 0:
        alert("sunday");
        break;
      case day == 1:
        alert("monday");
        break;
      case day == 2:
        alert("tuessday");
        break;
      case day == 3:
        alert("wednessday");
        break;
      case day == 4:
        alert("thursday");
        break;
      case day == 5:
        alert("friday");
        break;
      case day == 6:
        alert("saturday");
        break;
      default:
        alert('date incorrect');
    }
    break;
  default:
    alert('lang incorrect')
}