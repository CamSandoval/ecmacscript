//A la hora de crear strings que tengan que concatenar los valores de una o mas variables, debemos de generar una sintaxis particular.
let hello= 'hello';
let world = 'wolrd ';
let epicPhrase = hello + ' '+ world + '!';
console.log(epicPhrase);

//Con la adicion de la funcionalidad de TEMPLATE LITERALS podemos usar una nueva sintaxis que nos ayude a ahorrar codigo.
//TEMPLATE LITERALS
let epicPhrase2 = `${hello}${world}!`
console.log(epicPhrase2)

//Tambien puede ser usada para producir texto en varias lineas.
//Multi-line strings
let lorem = `Esta es una frase
y esta es la continuacion de la frase`;
console.log(lorem);