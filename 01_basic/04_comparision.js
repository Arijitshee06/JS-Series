console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// console.log("2"=1);  // that is not possible come to output because thats are not same type data to comparision, one is number and another is string  
// console.log("02"=1); // that is not possible come to output because thats are not same type data to comparision, one is number and another is string  


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === that's call strict check

console.log("2" === 2);



//The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.







