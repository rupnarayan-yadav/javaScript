// primitive 

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score=100
const scorevalue=100.3

const isloggedIn = false
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

// const bigNumber= 7485893537496080665n



// reference (Non primitive)

//Array, objects, functions


const heros= ["shaktiman", "naagraj", "doga"];
let myobj={
    name:"rupesh",
    age:21,
}

const myfunction= function(){
    console.log("hello world");
}
console.log(typeof scorevalue)