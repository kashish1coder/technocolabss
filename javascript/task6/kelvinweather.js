//variable type is constant and variable name is kelvin and value is 293
const kelvin = 293;
// celcius is 293 degrees less than kelvin.coversion of kelvin to celcius by subtracting 273 from the kelvin variable and storing the result in another variable, named celsius.
var Celsius = kelvin - 273;
//calculate Fahrenheit, then store the answer in a variable named fahrenheit.variable type that allows you to change its value.
var fahrenheit = Celsius * (9 / 5) + 32;
//when coverting from celcius to fahrenheit we sometimes get decimal value so for that we use the .floor() method from the built-in Math object to round down the Fahrenheit temperature and then Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
