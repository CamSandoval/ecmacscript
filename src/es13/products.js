import fetch from "node-fetch";


const response = await fetch('https://api.escuelajs.co/api/v1/products');
const data = await response.json();

export {data};