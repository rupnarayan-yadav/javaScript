

function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
}
 //saymyname()

// function addtwonumber(number1, number2){
//     console.log(number1+number2);
// }
// addtwonumber(2, 5)


function addtwonumber(number1, number2){
    // let result=number1+number2
    // return result
    return number1+number2
}

const result = addtwonumber(3,5)
// console.log("result: "+ result)


// function loginusermessage(username){
//     return `${username} just logged in`
// }
 
// console.log(loginusermessage("rupesh yadav"))

// function loginusermessage(username){
//   if (username===undefined){
//     console.log("please enter user name")
//     return
//   }

// }
// console.log(loginusermessage());


// function calculatecarprice(...num1){
//     return num1
// }
// console.log(calculatecarprice(200,400,500,2000))


// function calculatecarprice(val1, val2,...num1){
//     return num1
// }
// console.log(calculatecarprice(200,400,500,2000))


const user={
    username:"rupesh",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)

handleobject({
    username:"sam",
    price:399
})


//array
 const mynewArray=[200,300,400,500,600];
 function secondarrayvalue(getArray){
    return getArray[1]
 }
 console.log(secondarrayvalue(mynewArray));