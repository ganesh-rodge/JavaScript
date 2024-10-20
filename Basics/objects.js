//Defining the object
//we can insert differnet values in objects like number, string, symbol, etc...

const mysum = Symbol("Ganesh")
const data = {
    name : "ganesh",
    id: 1,
    age: 20,
    location: "Pune",
    names: ["Ganesh", "Nagnath", "Rodge"],
    email: "ganesh@gmail.com",
    isLoggedIn: false,
    [mysum]: "mykey"
}

//Accessing the object elements:
console.log(data.age)
console.log(data.location)
console.log(data["names"])
console.log(typeof mysum)
console.log(data[mysum])


//changing the value from the object
data.age = 20
console.log(data.age)

//calling the symbol directly
console.log(mysum)