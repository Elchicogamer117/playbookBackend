// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, 
// si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true, 8, 'String']
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

