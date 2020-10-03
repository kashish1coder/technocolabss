let raceNumber = Math.floor(Math.random() * 1000);
var regEarly = true;
var age = 18;
if(age>18 && regEarly==true)
raceNumber+=1000;
if(age>18 && regEarly==true)
{
console.log("Race No.-"+raceNumber+" You will race at 9:30am.");
}
else
{
if(age>18 && regEarly==false)
console.log("Race No.-"+raceNumber+" You will race at 11:00am.");
}
if(age<18)
console.log("Race No.-"+raceNumber+" You will race at 12:30pm.");
else
{
if(age==18)
console.log("Please go to the registration desk");
}
