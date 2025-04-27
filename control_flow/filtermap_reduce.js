const mycoding=["py", "js", "java", "ruby"]

const code=mycoding.forEach(function(item){
    // console.log(item)   // it will work
    // return item        //it will not work in for each loop
})
// console.log(code)  undefined

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter((num)=>num=>1)
// console.log(newnum)

const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynum.filter((num)=>{
//     return num=>1
// })
const newnums=[];
mynum.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})

console.log(newnums);

