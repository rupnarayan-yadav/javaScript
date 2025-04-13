//+++++++++++ arr part-2 ++++++++++++

const marval_heros=["thor", "ironman", "spiderman"]
const dc_marval=["superman", "flash", "batman"]

// marval_heros.push(dc_marval);  // array k andar array adding

// console.log(marval_heros);
// console.log(marval_heros[3][0]);

// marval_heros.concat(dc_marval)  //same to push
// console.log(marval_heros)

// const allHeros= marval_heros.concat(dc_marval) //merge of two arrays
// console.log(allHeros)

// const all_new_heros= [...marval_heros, ...dc_marval] //merge 
// console.log(all_new_heros);

const anotherarray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarray.flat(Infinity);
console.log(real_another_array)


Array.isArray(Array.isArray("Rupesh"))
console.log(Array.from("Rupesh"));
console.log(Array.from({name:"rupesh"})); //intresting case

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));