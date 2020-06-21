"use strict";

let admin, name;
name = 'John';
admin = name;
alert(admin);

let ourPlanetName = 'Earth'
let currentUserName = 'Kris'

let name1 = 'John'
alert(`Привет, ${name1}!`)
alert(`Результат: ${2+4}`)
alert(typeof ourPlanetName)

let value = true
alert(typeof value)

value = String(value)
alert(typeof value)

alert(6/2)

let str = '123'
alert(typeof str)
let num = Number(str)
alert(typeof num)

let age = Number('some')
alert(age) - NaN Преобразование не удалось 


alert( Number('  123   '))
alert( Number('123z'))
alert( Number(true))
alert( Number(false))



alert(1+'2')
alert('1'+2)


alert(''+1+0) //10
alert(''-1+0) //-1
alert(true+false) //1
alert(6/'3') //2
alert('2'*'3') //6
alert(4+5+'px') //9px WTF?!
alert('$'+4+5) //$45 killmeplease
alert('-9'+5) //-95
alert('-9'-5) //-14
alert(' \t \n'-2) //-2

let x = 1
x = -x
alert(x)

let s = ('моя' + 'строка') //бинарный плюс объединяет строку
alert(s)


let a,b,c
a=b=c=2+2
alert(a)
alert(b)
alert(c)



let a=1
let b=2
let c=3-(a=b+1)
alert(a)
alert(c)


//alert(5/2)
//alert(5%2)


let something = 5
something++
alert(something)



let counter = 0
counter++
++counter
alert(counter)


let a =1, b=1
let c = ++a
let d = b++


//let isBoss = confirm ('Ты здесь главный?')
//alert(isBoss)

//let name2=prompt ('Ваше имя?', '')
//alert(name2)


let year = prompt('В каком году вышел фильм Гарри Поттер?', '')
if (year <2001) {
alert ('ну слишком рано');
} else if (year>2001) {
alert ('поздно же');
} else {
alert ('точняк')
}



let age = prompt('Возраст?',18);
let message = (age<3) ? 'hi baby':
(age <18) ? 'hi badass':
(age <100) ? 'Hello there':
'Are you still alive?';
alert (message)



let company = prompt('Какая компания создала JC');
(company == 'Netscape') ?
alert('Верно!'): alert('Неправильно');




let currentUser = null
let defaultUser = 'John'

let name3 = currentUser || defaultUser || 'unnamed'
alert (name)




let userName = prompt("Кто там?", '');
if (userName == 'Админ') {

let pass = prompt('Пароль?', '');
if (pass == 'user') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Нет доступа' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Нет доступа' );
} else {
  alert( "Я вас не знаю" );
}



let i = 3;
while (i) alert(i--);



let i = 0;
do {
  alert( i );
  i++;
} while (i <= 4)



for (let p=0; p < 4; p++) {
alert(p);
}



for (let i = 0; i < 3; i++) {
alert(i); // 0, 1, 2
}
alert(i)




let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break;
  sum += value;
}
alert( 'Сумма: ' + sum );



for (let i = 0; i < 10; i++) {
if (i % 2==0) continue 
alert( i );
}



for(let i=0;i<3;i++) {
for(let j=0;j<3;j++) {
let input = prompt (`Значение на координатах (${i}, ${j})`, '')
}
}
alert ('Готово')



let i = 3;
while (i) {
alert( i-- );
}



for (let i=2; i<=10; i++) {
if (i%2 ==0) {
alert(i)
}
}



let i = 0;
while (i < 3) {
alert( `number ${i}!` );
i++;
}



let number
do {
  num = prompt("Введите число, большее 100?", 0)
} while (number <= 100)



let n = 10;
nextPrime:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
      continue nextPrime
      }
    }
    alert(i);
  }



let a = 4 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}



let a = 2 + 2;
switch (a) {
  case 4:
    alert('Правильно!');
    break;
  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;
  default:
    alert('Результат выглядит странновато. Честно.');
}



let browser = prompt ('What browser do you have?', '')
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
}



let browser = prompt ('What browser do you have?', '')
if (browser =='Edge') {
alert( "You've got the Edge!" )
} else if (browser == 'Chrome' 
||browser=='Firefox'
||browser== 'Safari'
||browser=='Opera') {
alert ('Okay we support these browsers too')
} else {
alert ( 'We hope that this page looks ok!' )
}



const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}



const number=+prompt ('Введите число между 0 и 3', '')
switch (number) {
case 0:
alert ('Вы ввели число 0')
break;
case 1:
alert ('Вы ввели число 1')
break;
case 2:
case 3:
alert('Вы ввели число 2, а может и 3')
break;
}



function showMessage() {
let message = 'blabla'
alert(message)
}
showMessage()



function showMessage(from, text) {
  alert(from + ': ' + text);
}
showMessage('Аня', 'Привет!');
showMessage('Аня', "Как дела?");



function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}
let age = prompt('Сколько вам лет?', 18);
if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
} 



function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i); 
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}



function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
//Функция развернутая

function checkAge(age) {
  return (age > 18) ? true: confirm ('Родители разрешили?')
}

function checkAge(age) {
  return (age > 18) || confirm ('Родители разрешили?')
}
Функции переделанные в одну строку с помощью операторов



function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}



function pow(m, n) {
  let result = m;
    result *= m;
  return result;
}
let m = prompt("m?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(m, n) );
}



// Функция возведения числа в степень 
let x1 = prompt ('x?', '');
let n1 = prompt ('n?', '');
function pow(x1,n1) {
if (n1<1) {
alert ('Значение меньше 1');
} else {
alert (x1**n1)
}
}
pow(x1,n1);



function ask (question, yes, no){
if (confirm(question)) yes()
else no ();
}
function showOk (){
alert ('You agreed')
}
function showCancel(){
alert ('You didnt agree')
}
ask('Are you agree?', showOk, showCancel)



function ask (question, yes, no){
if (confirm(question)) yes()
else no ();
}
ask(
    'Are you agree?', 
    function() {alert('You agreed');},
    function() {alert('You didnt agree');}
);



let age = prompt("Сколько Вам лет?", '');
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Привет!");
  };
} else {
  welcome = function() {
    alert("Здравствуйте!");
  };
}
welcome();


// Упрощенный код
let age = prompt("Сколько Вам лет?", '');
let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };
welcome();



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


//ТО же самое, только со стрелочными функциями
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);



let animal = prompt('Какое твое любимое животное?', 'пёсель')

let answer = {
  [animal]: 'и у меня'
}

alert(answer.пёсель)



let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name



function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}


мой вариант
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = (salaries.John + salaries.Ann + salaries.Pete)
alert (sum)
