const anotherFunction= () =>{
    return new Promise ((resolve,reject)=>{
        if(false){
            resolve('Good job!');
        }else{
            reject('Try again');
        }
    })
}

anotherFunction()
.then(Response => console.log(Response))
.catch(err=>console.log(err))