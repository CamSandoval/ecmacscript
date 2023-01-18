//Object.entries, nos permite transformar un objeto en un array con la particularidad de que nos retornara un array con otros array adentro con los coorespondientes valores
const countries ={ MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
};

console.log(Object.entries(countries))/* OUTPUT =
[
    [ 'MX', 'Mexico' ],
    [ 'CO', 'Colombia' ],
    [ 'CL', 'Chile' ],
    [ 'PE', 'Perú' ]
  ] */
