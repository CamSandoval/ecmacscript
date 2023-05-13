//Esta es una nueva funcion que permite revisar cuando una o un grupo de promesas ya ha sido finallizada poder obtener sus respuestas
const promise1 = new Promise((resolve,reject)=> reject('There was a problem'));

Promise.allSettled([promise1])
    .then(response => console.log(response));//[ { status: 'rejected', reason: 'There was a problem' } ]

const promise2 = new Promise ((resolve,reject)=> resolve('Everything was fine'));
const promise3 = new Promise ((resolve,reject)=> reject('opppps!'));
const promise4 = new Promise ((resolve,reject)=> resolve('Great work'));

Promise.allSettled([promise2,promise3,promise4])
    .then(response => console.log(response));
    /*OUTPUT=[
        { status: 'fulfilled', value: 'Everything was fine' },
        { status: 'rejected', reason: 'opppps!' },
        { status: 'fulfilled', value: 'Great work' }
]*/ 