// const tinderuser= new object()  //singleto object  
const tinderuser={}   //non singlrton object

tinderuser.id = "123abc"
tinderuser.name = "rupa"
tinderuser.isLoggedin = false

// console.log(tinderuser);

const regularuser={
    email:"sonu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rup",
            lastname:"yadav"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1, obj2}
//const obj3=Object.assign({},obj1,obj2)
//const obj3={...obj1, ...obj2}
//console.log(obj3);



//array kaa object
const user=[
    {
        id:1,
        email:"rup@gmail.com"
    },
    {
        id:1,
        email:"rup@gmail.com"
    },
    {
        id:1,
        email:"rup@gmail.com"
    }
]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin')); //check propery available or not