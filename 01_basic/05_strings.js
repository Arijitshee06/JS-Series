const name = "arijit"
const repoCount = 5

console.log(name + repoCount +"Valuse");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // that syntax called String Interpolation

const gameName = new String('arrii-sunuu-com')   // here all strings prototype method show in browser console

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);   //thats only start from '0' any word

const anotherString = gameName.slice(-8,4)
console.log(anotherString);   //that use also in negative sign

const newStringOne =" arijit shee "
console.log(newStringOne.trim());
console.log(newStringOne)



const url = "https://arijitshee.com/arijit%23shee"

console.log(url.replace('%23', '-'))
console.log(url.includes('she'))
console.log(gameName.split('-'));




