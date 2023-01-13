//OBJECT LITERALS
//Esta es una nueva forma de crear objetos de una manera más simple
function newUser(name,age,country,UiD){
    return {
        name,
        age,
        country,
         id: UiD,
    }
}
console.log(newUser('camilo',26,'col',2))//OUTPUT={ name: 'camilo', age: 26, country: 'col', id: 2 }