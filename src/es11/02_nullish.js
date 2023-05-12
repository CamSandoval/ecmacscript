//When we receive a varable in the code, we could validete it , and if it arrived whit a null value, we can strablece a opcional value for it

const number = 5;
const validate1 = number ?? 15;
console.log(validate1);//5

const number2 = null;
const validate2 = number2 ?? 15;
console.log(validate2);//15