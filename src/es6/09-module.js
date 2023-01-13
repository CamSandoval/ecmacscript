//Los modulos son una forma de conectar codigo de diferentes archivos mediante la utilizacion de la palabra reservada import y export, dependiendo del caso


//Para esto tener en cuenta que debemos de tener en nuestro archivo .json el siguiente codigo  "type": "module" 
//Además de adicionar la extensión .js en el import
import hello from "./module.js";

hello('david');
hello();



