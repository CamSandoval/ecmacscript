//At is a new method of arrays manipulation which allows see the last item in arrays in a  mos cleasn declaration

const array = ["one", "two", "three", "four", "five", "six"];
//before es13
console.log(array[array.length -1]);
//after es13
console.log(array.at(-1));