var lastName = 'David';
lastName= 'Oscar';
console.log(lastName);

let fruit = 'apple';
fruit= 'Kiwi';
console.log(fruit);

const animal= 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1) // function scope
    console.log(fruit2) // block scope
    console.log(fruit3) // block scope
}

fruits()