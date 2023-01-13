//La destructuracion de arrays o objetos consiste en poder extraer los valores de estos en distintas variables de diferentes maneras
//ARRAYS DESTRUCTURIG
const fruits = ['apple','banana'];
const [a,b]= fruits;
let listFruits =`${a}
${b}`
console.log(listFruits) //OUTPUT = 'apple banana'
console.log(a) //OUTPUT = 'apple'

//Llegado el caso, si se tiene un array muy grande se puede usar el indice

const arr= [1,2,3,4,5,6,7,8,9,10]
const {5: hola} = arr
console.log(hola); // OUTPUT = 6

    //OBJECTS DESTRUCTURING
    const obj ={Username:'juan',age:26};
    const { Username,age}=obj;
    console.log(Username);//OUTPUT = 'juan'
    //También existe la opcion clasica, la cual es acceder a las propedades del objeto
    console.log(obj.age) //OUTPUT= '26'



//SPREAD OPERATOR
//(...): Este es un operador que permite propagar los elementos tanto de un objeto como de un array, para si realizar copias que no sean interactivas o dependan de la varable inicial

let person = { name: 'Juan', age : 26};
let country= 'Col';

let data = {...person, country}
console.log(data); //OUTPUT= { name: 'Juan', age: 26, country: 'Col' }

const array= [...'hola'];
console.log(array) //OUTPUT= [ 'h', 'o', 'l', 'a' ]



//RestParameters 
//Esta es la forma mediante la cual podemos agrupar un número indefinido de argumentos como un array, es decir, si se pasan muchos argumentos en la aplicacion de una funcion, estos se pueden agrupar en una sola variable
const sum = (num, ...values) =>{
    console.log(values) //OUTPUT=[ 5, 6, 7 ]
    console.log(num+values[0])//OUTPUT=6
    console.log(num + values.length) //OUTPUT=4
}

sum (1,5,6,7)


//También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.
const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
 }

const arra = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = arra

console.log(usuario) // { nombre: 'Andres', age: 23 }
console.log(positivos)// [ 1, 2, 3, 4, 5 ]
