//The optional chaining is a operator which is that is in charge of allowing developers to be able to validate if an attribute exists within an object, with the intention that if it does not exist, avoid generating an error that pauses the application

const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}

console.log(users.gndx.country);//MX
console.log(users?.developer?.country);//undefined
console.log(users.developer);//TypeError: Cannot read properties of undefined (reading 'developer')