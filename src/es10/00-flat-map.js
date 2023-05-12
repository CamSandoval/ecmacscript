const array = [1,2,3,4,[5,6,7,[8,9,10]],11];

const arrFlat= array.flat(3);
console.log(arrFlat);//[1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

console.log(arrFlat.flatMap(i=>i+1));