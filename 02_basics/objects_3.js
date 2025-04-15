
//destructuring
const course = {
    coursename: "javascrip",
    price:"999",
    courseinstructor:"rupesh"
}
//console.courseinstructor



// const  navbar=(props.company)=>{

// }

const  navbar=({company})=>{

}


navbar(company = "rupesh")


const {courseinstructor:instructor}=course

//console.log(courseinstructor)
console.log(instructor);

//json
//api

// {
//     "name":"rupesh",
//     "coursename":"javascript",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Mrs",
//           "first": "Saisha",
//           "last": "Saha"
//         },
//         "location": {
//           "street": {
//             "number": 166,
//             "name": "Altamount Rd"
//           },
//           "city": "Rajahmundry",
//           "state": "Arunachal Pradesh",
//           "country": "India",
//           "postcode": 45232,
//           "coordinates": {
//             "latitude": "10.2996",
//             "longitude": "50.3386"
//           },
//           "timezone": {
//             "offset": "+5:00",
//             "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
//           }
//         },
//         "email": "saisha.saha@example.com",
//         "login": {
//           "uuid": "ac9a00c1-67a9-421a-bef9-31170cfbfa23",
//           "username": "organicelephant164",
//           "password": "xyz123",
//           "salt": "DPLlhOm4",
//           "md5": "d683b6da1df040df7d18d09d99fef719",
//           "sha1": "0636aefb43de7c82e9cabbe7c6e1d65127412aab",
//           "sha256": "f9ab70716db046878988263b3659f090f6a77c2a982f56a3e72bd42065364c05"
//         },
//         "dob": {
//           "date": "1950-10-20T04:56:52.754Z",
//           "age": 74
//         },
//         "registered": {
//           "date": "2011-03-31T11:00:27.647Z",
//           "age": 14
//         },
//         "phone": "9979612279",
//         "cell": "9954081877",
//         "id": {
//           "name": "UIDAI",
//           "value": "456525399425"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/women/4.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
//         },
//         "nat": "IN"
//       }
//     ],
//     "info": {
//       "seed": "525f33b39ca239f2",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }