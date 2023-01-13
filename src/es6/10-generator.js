//Un generator es un tipo de funcion, la cual se puede considerar como un tipo de ciclo el cual se puede pausar o dejar de usar, y despues de eso, este podra recordar el estado en el que se encontraba antes
function* iterate(array){
    for (let arr of array){
        yield arr
    }
}
const it = iterate(['camilo','ana','julian']) ;
console.log(it.next().value)//OUTPUT= camilo
console.log(it.next().value)//OUTPUT=ana
console.log(it.next().value)//OUTPUT=julian

//Tambien podemos tener en cuenta que en la aplicacion del ciclo for de js, existen muchas formas de usarlo
    //ARRAYS
    //Cuando usamos el of estamos pidiendo que se nos retornen los valores del array, en este caso 12,23,34,45 etc
    const arr= [12,23,34,45,56,67]
    for (let value of arr){
        console.log(value)
    }
    //Cuando usamos in , estamos retornando el valor del index del array, en este caso 0,1,2,3
    for (let value in arr){
        console.log(value)
    }

    //OBJETOS
    //Los objetos no son elementos iterables, ´por lo cual, son elementos que no podran ser usados con of, unicamnet con in
    const objeto = { a: 1, b: 2, c: 3 }
    for (let value in objeto){
        console.log(value)// OUTPUT=a,b,c
    }


