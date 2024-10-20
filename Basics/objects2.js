//Values of both below lines is same
//const user = new Object()
const user = {}
console.log(user)

//adding values from outside
user.id = 1
user.name = "Ganesh"
user.isLoggedIn = true
console.log(user.id)

//We can declare object inside the object
const newUser = {
    id: 1,
    fullName: {
        firstName: "Ganesh",
        middleName: "Nagnath",
        lastName: "Rodge"
    }
}

console.log(newUser.fullName)
console.log(newUser.fullName.firstName)

//adding the key and values of one or more objects to another object:
const obj1 = {
    1:"Ganesh",
    2:"Poonam"
}

const obj2 = {
    3:"Tushar",
    4:"Sanu"
}

const obj3 = {
    5: "Akshata",
    6: "Yogesh"
}

// this assign method returns all the values from the existing given objects and assign them into one array
const finalObj = Object.assign(obj1, obj2, obj3)  
console.log(finalObj)


// Imp : object's key must be unique if we are using same key for the object then it will just override the value//
//for ex : 5:"Akshata", 5:"Yogesh"    ---- The value considered is Yogesh becase it is assigned 