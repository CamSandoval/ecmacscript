//Los parametros por defecto son la forma en la cual se cuida o se prevee que llegado e caso dentro de la utilizacion de ua funcion no se de el valor de estos, los parametros manejen un valor por default

//Esta era la forma usada anteriormente
function newUser(name,age,country){
    var name = name || 'oscar';
    var age = age || 24;
    var country = country || 'Mx';
    console.log(`${name} ${age} ${country}`);
}

newUser();
newUser('juan', 55, 'Co');


//En ECMAScript6 se creo esta nueva sintaxis para la creacion de parametros por defecto
const newUser2 = (name='oscar', age= 25, country='Cl' ) =>{
    console.log(name,age,country)
}
newUser2();//OUTPUT=oscar 25 Cl
newUser2('david',26,'Ar');//OUTPUT=david 26 Ar