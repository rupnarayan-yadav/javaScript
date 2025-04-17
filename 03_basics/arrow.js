const user ={
    username:"rupesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(`${this.price}, this is our price`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username="ritesh"
// user.welcomeMessage()
// user.welcomeMessage()


//  console.log(this);

// function mani(){
//     let username="rupa"
//     console.log(this);
// }
// mani()

// const chai = function(){
//     let username = "rupesh"
//     console.log(this.username);
// }

const chai = ()=>{
    let username = "rupesh"
    console.log(this);
}


//chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

//const addtwo=(num1,num2)=>  num1+num2
// const addtwo=(num1,num2)=>  (num1+num2)

const addtwo=(num1,num2) => ({username:"rup"})

console.log(addtwo(3,4))

