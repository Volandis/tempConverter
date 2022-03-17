// constant called kelvin set to 293
const kelvin = 0

// changes kelvin to celsius and saves as new constant
const celsius = kelvin - 273

// changes celsius to fahrenheit and saves new variable
let fahrenheit = celsius *(9/5) +32

//rounded down
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// changes celsius to bewton and saves new variable
let newton = celsius *(33/100)

//rounded down
newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton.`)