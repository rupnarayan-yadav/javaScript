// singletone
//object.create


//object literal

const mysym= Symbol("key1")

const Jsuser={
    name:"rupa",
    "full name": "rupesh yadav",
    [mysym]:"mykey1",
    age:20,
    location:"ktm",
    email:"rup@gmail.com",
    isloggedin:false,
    lastloginday:["mondey", "saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(typeof Jsuser[mysym])


Jsuser.email = "rupnarayan.23@gmail.com"
// console.log(Jsuser["email"])
// Object.freeze(Jsuser) 
Jsuser.email = "sandhu@gmail.com"
// console.log(Jsuser["email"])
// console.log(Jsuser)
 


Jsuser.greeting = function(){
    console.log("hello js user")
}

Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.age}`)
}

console.log(Jsuser.greeting2())
console.log(Jsuser.greeting())