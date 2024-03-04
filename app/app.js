let userName = prompt("please inter your full name!");
let age = prompt("how old are you?");
switch (true) {
  case age < 18:
    alert("you dont have accese for watch my website");
    break;
  case age >= 18:
    confirm("Are you serious?");
    break;
  default:
    alert("your post is unknown!");
    break;
}
alert(userName + " welcome to my online calculator!");
let firstNumber = Number(prompt("please inter first number for calculate!"));
let secondNumber = Number(prompt("please inter second number for calculate!"));
let operation = prompt("please inter your operation!!");
let result;
switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    alert("invalid operation. please enter +, -, *, or /.");
    break;
}
if (result !== undefined) {
  alert("result: " + result);
}
let question = confirm("Do you want to get the numerical average?");
if (question == true) {
  let firstNumber = prompt("inter your first number");
  let secondNumber = prompt("inter your second number");
  function average(firstNumber, secondNumber) {
    return (firstNumber + secondNumber) / 2;
  }
  alert(average(firstNumber, secondNumber));
} else if (question == false) {
  alert("thank you    goodbye👋");
}
