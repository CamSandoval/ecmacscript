//Los metodos padStart y padEnd son usados para manipular strings, agregando tanto al final como al inicio de cada string, un valor por asignable, que tiene en cuenta la cantidad de caracteres del string 
const string = 'hello';

console.log(string.padStart(7, '5')); // OUTPUT= 55hello
console.log((string.padEnd(8, '_')));// OUTPUT= hello___ 