//Object.values nos permite transformar un objeto en un array, pero este solo retornara los valores asignados a cada atributo del objeto
const countries ={ MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
};

console.log(Object.values(countries));//OUTPUT  = [ 'Mexico', 'Colombia', 'Chile', 'Perú' ]