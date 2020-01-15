/* Создайте ассоциативный массив person, описывающий
персону, с произвольным количеством произвольных полей.
С помощью оператора in или typeof проверьте 
наличие в объекте свойства, прочитанного из 
prompt, и выведите его на экран.
Если свойства нет, то добавляйте его в объект 
со значением, которое также 
запрашивается из prompt. */

let person = new Map([
    ['name', 'Ivan'],
    ['age', '27'],
    ['height', 182],
    ['wight', 79],
    ['sex', 'male']
])
key = prompt()
if (person.has(key)) {
    alert(person.get(key))
} else {
    person.set(key, prompt())
}
console.log(person);