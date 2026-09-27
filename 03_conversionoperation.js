let score = "33aaabc"
 
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
//"33abc" => NaN
// ture => 1; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1=> ture ; 0=> false
// "" => false
// "arijit" => true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);
//**************************oprations******************************///
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**10);  //power
console.log(2/3);
console.log(2%3);



let str1 = "arijit"
let str2 = "shee"

let str3 = str1 + str2
console.log(str3)
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); /// when strings are first all values is string
console.log(1 + 2 + "2"); /// when first value is 'int' then all values add then add string value


console.log((3+4) * 5 %3);

console.log(+true)
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
++gameCounter;
console.log(gameCounter)

//x++ → First use, then increase
// let a = 10;
// let b = a++;

// console.log(a); // 11
// console.log(b); // 10
//++x → First increase, then use
// let a = 10;
// let b = ++a;

// console.log(a); // 11
// console.log(b); // 11

