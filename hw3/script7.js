/*7.	Создайте объект dates для хранения дат. 
Первая дата – текущая, new Date. Вторая дата – 
текущая дата минус 365 дней. Из prompt читается
дата в формате yyyy-MM-dd. Проверьте, попадает 
ли введенная дата в диапазон дат объекта 
dates.*/

let nowDate = new Date();
nowDate = nowDate.getTime();

let nextDate = new Date();
nextDate.setDate(-365);
nextDate = nextDate.getTime();

let dates = {
    first: nowDate,
    last: nextDate,
}

let prDate = prompt('введите дату в формате yyyy-MM-dd');

t = prDate.split('-'),
    prYear = t[0],
    prMonth = parseInt(t[1]) - 1,
    prDay = parseInt(t[2]);

let y = new Date(prYear, prMonth, prDay);
y = y.getTime();

if (dates.first > y && dates.last < y) {
    alert('Введенная дата входит в диапазон')
} else {
    alert('Введенная дата не входит в диапазон')
}