//Normalmente asociamos la creacionde funciones con la palabra reservada 'function', pero en es6 se creo la forma de creacionde funciones de flecha
function square (num){
    return num * num;
}
//Esta consiste en declarar una variable const, e incicializarla con sus parametros, seguidos de una flecha la cual indicara el inico de los handelvars o llaves que aislaran su codigo.
const square = (num) => {
    return num * num;
}

const square = num => num * num;    