const coding =["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printme(value){
//     console.log(value)
// }
// coding.forEach(printme);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding=[
    {
        language:"javaScript",
        languagefile:"js"
    },
    {
        language:"PYTHON",
        languagefile:"py"
    },
    {
        language:"java",
        languagefile:"jav"
    }
]

mycoding.forEach((item)=>{
    console.log(item);
    console.log(item.language);
})
