//El objeto global o window es una herramienta propia de los navegadores, la cual provee a los desarrolladores de bastantes funcionalidades basntante importantes, estas anteriormenta no estaban disponibles en entornos de ejecución con Node o en un webworker

//Para solucionar esto se creo global this una herramienta capaz de proveer esta funcionalidad a cualquier entorno de trabajo


//Tambien existen opciones especificas para cada entorno aunque globalThis funcionaria para cualquiera de ellos

console.log(window);//navegador
console.log(self);//webworker

console.log(globalThis);//Especial para Node
/*<ref *1> Object [global] {
  global: [Circular *1],
clearInterval: [Function: clearInterval],
clearTimeout: [Function: clearTimeout],
setInterval: [Function: setInterval],
setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
},
queueMicrotask: [Function: queueMicrotask],
performance: Performance {
    nodeTiming: PerformanceNodeTiming {
    name: 'node',
    entryType: 'node',
    startTime: 0,
    duration: 46.450653000036255,
    nodeStart: 0.09283600002527237,
    v8Start: 2.702925000106916,
    bootstrapComplete: 33.28570199990645,
    environment: 17.502616999903694,
    loopStart: 39.35972400009632,
    loopExit: -1,
    idleTime: 0.05785
    },
    timeOrigin: 1683942586390.029
},
clearImmediate: [Function: clearImmediate],
setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
}
}*/