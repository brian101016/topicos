console.log("EJERCICIO 1");
const arr1 = [1,5,3,4,6,8,0,5];
arr1.filter((n) => n >= 5)
    .forEach((n) => console.log("Valor admitido: " + n));

console.log("EJERCICIO 2");
const arr2 = ["naranja", "platano", "manzana", "fresa", "kiwi"];
console.log( arr2.slice(2, 4) );

console.log("EJERCICIO 3");
const arr3 = [3,9,5,2,6,8,4];
arr3.map((n, i) => console.log(i + ": " + (n +10)));

console.log("EJERCICIO 4");
const one = ["H", "I", "J"];
const two = ["K", "L", "M"];
console.log( one.concat(two) );

console.log("EJERCICIO 5");
const arr5 = ["mexico", "usa", "francia"];
console.log(arr5.includes("francia"));
