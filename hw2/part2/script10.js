let password = 'Qwerty1234';

for (; ;) {
  let check = prompt("enter password", 'Qwerty1234');
  if (check === password) {
    alert("Вы успешно авторизованы");
    break;
  }
  if (check == null) {
    let stopKnopka = confirm("Вы уверены, что хотите отменить авторизацию?");
    if (stopKnopka == true) {
      break;
    }
  }
}