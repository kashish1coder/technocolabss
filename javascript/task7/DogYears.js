//declared a variable name myAge.
let myAge = 20;
//declared a variable name earlyYears.
let earlyYears = 2;
earlyYears *= 10.5;
//Defined later years.
let laterYears = myAge - 2;
//calculate the number of dog years accounted for by your later years.
laterYears *= 4;
//console.log(earlyYears, laterYears);
//for calculating my age in dog years.
let myAgeInDogYear = earlyYears + laterYears;
//defining myName and then coverting it to lower cases.
var myName = "kashish khare";
myName.toLowerCase();
console.log(
  "My name is " +
    myName +
    ". I am " +
    myAge +
    " AGE years old in human years which is " +
    myAgeInDogYear +
    " years old in dog years."
);
