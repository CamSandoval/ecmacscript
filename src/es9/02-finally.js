const anotherFunction= () =>{
    return new Promise ((resolve,reject)=>{
        if(true){
            resolve('Good job!');
        }else{
            reject('Try again');
        }
    })
}

anotherFunction()
.then(Response => console.log(Response))
.catch(err=>console.log(err))
.finally(()=>console.log('Finally'))