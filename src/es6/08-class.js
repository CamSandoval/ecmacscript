//CLASES
//Estas son un tipo de funciones, con las cuales podemos generar objetos de manera mas simple
class User {
    greeting(){
        return 'Hello'
    }
}
const Juan = new User();
console.log(Juan.greeting());//OUTPUT = Hello

//La funcion constructor, nos permite agregar los atributos los cuales recibiran nuestros diferentes tipos de objetos
class user {
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greeting(){
        return `'hello ${this.name}, you have ${this.age} years'`
    }
}
const juan = new user('juan',26);//OUTPUT= user {name: 'juan', age: 26}
console.log(juan.greeting()); //OUTPUT= hello juan, you have 26 years



class User2 {
    constructor(name){
        this.name=name;
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return`${this.speak()}, ${this.name}`
    }
}

const david = new User2('david');
console.log(david.greeting()) //OUTPUT= hello, david

//GETING AND SETING

class User3 {
    //Constructor
    constructor(name,age){
        this.name=name;
        this.age= age;
    }
    //Metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return`${this.speak()}, ${this.name}`
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        return this.age= n;
    }
}
const ana = new User3('ana',15)
console.log(ana.uAge);//OUTPUT=15
console.log(ana.uAge=20);//OUTPUT=20