const fnAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('AsynC!!'), 2000)
        : reject(new Error('Error!'));
    })
}
//async es la forma en la cual podemos definir que el codigo de una funcion sera ejecutado mediante la espera de sus resultados, en este caso, una funcion
//En estoas casos el callStack de javascript no se bloquea ejecutando una funcion a la vez, sino que se sige ejecutando y cuando se tengan los valores estao seran mostrados en pantalla
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('Before');
anotherFn();
console.log('After');

function anfunction (num){
    //let  a = num;
    setTimeout(()=>{
        console.log(num)
    },4000)
}

anfunction(5)


/*function sumar(num) {
    return valor + num;
}

function restar(num) {
    return valor - num;
}

function asFunc(num,callback){
    return callback(num, valor = 100)
}
console.log(asFunc(5, restar));*/


function asFunc(tal,val){
    let valor = 100;

    function sumar(num){
        valor+=num;
        console.log(valor);
    }
    function restar(num){
        valor-=num;
        console.log(valor);
    }

    function async(num,callback){
        return callback(num)
    }
    
    if(tal == 1){
        async(val,restar)
    } else{
        async(val,sumar)
    }
}
let alg = asFunc();
alg(3,5)


