//From entries is the new form to transform a matriz of arrays to a object

const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
] ;

const ArrayTransform = Object.fromEntries(arrayEntries);
console.log(ArrayTransform);//{ name: 'Andres', email: 'andres@correo.com', age: 23 }