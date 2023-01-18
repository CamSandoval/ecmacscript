const user = {username: 'JuanS229', age: 19, country: 'CO'};
const {age, ...rest}= user;
console.log(age);
console.log(rest);

let arr = [2,5,8,6,5];
console.log(arr[2]);
let [a,b,...ok]=arr;
console.log(a);
console.log(ok);