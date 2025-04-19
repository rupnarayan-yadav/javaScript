//for of

//["", "", ""]
//[{},{},{}]

// const arr=[1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }

// const greeting ="RUPESH"
// for(const greet of greeting){
//     console.log(greet);
// }

// map
const map=new Map()
map.set('In', "india")
map.set('np', "nepal")
map.set('fc', "france")

for(const [key, value] of map){
    console.log(key, ':-', value);
}
// console.log(map)