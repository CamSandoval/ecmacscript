//Promise.any is a functionality which allows to see what is the first resolved promise in a group of them.

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));//resolve 1


