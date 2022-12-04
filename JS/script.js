alert("Task 1: math operations in console")
let firstFloat = prompt("Please enter first float value");
let secondFloat = prompt("Please enter second float value");

let summ = parseFloat(firstFloat) + parseFloat(secondFloat);
let difference = firstFloat - secondFloat;
let multiptication = firstFloat * secondFloat;
let division = firstFloat / secondFloat;

console.log("First float value is: ", firstFloat);
console.log("Second float value is: ", secondFloat);

console.log("First float value + Second float value =", summ);
console.log("First float value - Second float value =", difference);
console.log("First float value * Second float value =", multiptication);
console.log("First float value / Second float value =", division);

alert("Task 2: string values in HTML file")

let firstStrignVal = prompt("Please enter your SURNAME");
let secondStrignVal = prompt("Please enter your NAME");

document.write("Your name and surname are: " + secondStrignVal + " " + firstStrignVal);

alert("Task 3: language code check")
let stringCheckResult;
let stringCheck = prompt("Please enter your LANGUAGE CODE");
if (stringCheck == "uk") stringCheckResult=true, console.log(stringCheckResult), document.write("</br>"), document.write("Your language code is: ", stringCheck, " and it is ",stringCheckResult);
else if (stringCheck == "ru") stringCheckResult=false, console.log(stringCheckResult), document.write("</br>"), document.write("Your language code is:", stringCheck, " and it is ",stringCheckResult);
else console.log("You have entered wrong language code. Please refresh page and try again."),alert("You have entered wrong language code. Please refresh page and try again.")

alert("Task 4: check if value is bigger than 20 and 30")
let thirdFloat = prompt("Please enter first value for checking");
let fourthFloat = prompt("Please enter second value for checking");
let checkResults=thirdFloat>20&&fourthFloat>30;
console.log(checkResults)