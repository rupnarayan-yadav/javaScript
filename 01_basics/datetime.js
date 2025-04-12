// dates

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toJSON())
// console.log(typeof mydate);

let mycreate =new Date(2023, 0, 23)
console.log(mycreate.toDateString());

let mycreatedate =new Date(2023, 0, 23, 5, 7)
console.log(mycreatedate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

const dayName=newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(dayName)