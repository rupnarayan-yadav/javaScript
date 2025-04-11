const name= "rupesh"
const repocount= 50;

//console.log(name + repocount + "value");

 console.log(`hello my name is ${name} and my repo count is  ${repocount}`); 

 const gameName = new String('rupeshkumar-hc');

 console.log(gameName[0]);
 console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));

 const newString=gameName.substring(0,4) 
 console.log(newString);

const anotherString = gameName.slice(-7)
console.log(anotherString);

const newStringone= "   rupesh   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "rupeshbhai"
console.log(url.replace('p', 's'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));