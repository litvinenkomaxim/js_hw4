let month = new Date();
alert(month);
monthName = month.getMonth();

switch (monthName) {
  case 0:
  case 1:
  case 11:
    alert('zima');
    break;
  case 2:
  case 3:
  case 4:
    alert('vesna');
    break;
  case 5:
  case 6:
  case 7:
    alert('leto');
    break;
  case 8:
  case 9:
  case 10:
    alert('osen');
    break;
  default:
    alert('date incorrect');
}