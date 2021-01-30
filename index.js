// jshint esversion:6

// JS Course 1 Solution Code

// Code for Rock, Paper, SCissors Game
    var output = document.querySelectorAll("#text")[0];  //HTML that we'll be targetting
    var question = "What do you choose: Rock, Paper or Scissors?";
    var answer = prompt(question);

    var selection1 = answer.charAt(0).toUpperCase();

    var computer = Math.random();
    if (computer < 0.34) {
      computer = "Rock";
    } else if (computer >= 0.34 && computer < 0.67) {  //We want a 1/3 chance of it being Rock, Paper or Scissors
      computer = "Paper";
    } else {
      computer = "Scissors";
    }

    var selection2 = computer.charAt(0).toUpperCase();
    console.log(computer);

    if (selection1 === selection2) {
      alert("It's a tie!");
      output.innerText="There's been a DRAW!";
    } else if (selection1 === "R" && selection2 === "S") {
      alert("The player has won!");
      output.innerText="You have WON!";
    } else if (selection1 === "R" && selection2 === "P") {
      alert("The computer has won!");
      output.innerText="Ooops... you've LOST this time!";
    } else if (selection1 === "S" && selection2 === "R") {
      alert("The computer has won!");
      output.innerText="Ooops... you've lost this time!";
    } else if (selection1 === "S" && selection2 === "P") {
      alert("The player has won!");
      output.innerText="You have WON!";
    } else if (selection1 === "P" && selection2 === "R") {
      alert("The player has won!");
      output.innerText="You have WON!";
    } else if (selection1 === "P" && selection2 === "S") {
      alert("The computer has won!");
      output.innerText="Ooops... you've lost this time!";
    } else {
      alert("Your answer is not valid!");
      output.innerText="Your answer is not valid. Please refresh the page and try again!";
    }

//Code for Calorie Counter App
    var output = document.getElementsByClassName("results")[0];
    var calories = 105;

    var question = "How many bananas would you like?";
    var answer = prompt(question);

    for (var x = 1; x < Number(answer); x++) {
      output.innerText+="Calorie intake = " + calories * x + "\n";
    }
    output.innerText+="Total caloric intake = " + calories * Number(answer);


//Code for building an HTML table using Nested loops
    var output = document.getElementsByClassName("table")[0];  //Should point to an empty div
    var html = "<table>";

    for (var row = 0; row < 10; row++) {
      html+="<tr>";
      for (var col = 0; col < 5; col++) {
        html+="<td>Value = " + col + "</td>";
      }
      html+="</tr>";
    }

    html+="</table>";
    output.innerHTML = html;


//Code for building a Shopping List & looping through the items

    var output = document.getElementsByTagName("h1")[0];
    var list = [];

    var question1 = "How many items would you like in your shopping list?";
    var answer1 = prompt(question1);

    for (var x = 0; x < Number(answer1); x++) {
      var question2 = "So, what do you want to buy?";
      var answer2 = prompt(question2);
      list.push(answer2);
    }

    for (var x = 0; x < list.length; x++) {
      output.innerText+=list[x] + "\n";
    }


//Code for building Javascript Calculator

var output = document.getElementsByTagName("h1")[0];  //This should point to <h1> within div
var num1 = document.getElementById("num1"); //Input tag
var num2 = document.getElementById("num2");  //Input tag

//Addition:
function addBy() {
  var a = Number(num1.value);
  var b = "+";
  var c = Number(num2.value);
  var d = a + c;
  outputHTML(a, b, c, d);
}

function outputHTML(a, b, c, d) {
  output.innerText+=a + " " + b + " " + c + " = " + d + "\n";
}

//Subtraction:
function subtractBy() {
  var a = Number(num1.value);
  var b = "-";
  var c = Number(num2.value);

  var d = a - c;
  outputHTML(a, b, c, d);
}

function outputHTML(a, b, c, d) {
  output.innerText+=a + " " + b + " " + c + " = " + d + "\n";
}

//Mutiplication:
function multiplyBy() {
  var a = Number(num1.value);
  var b = "x";
  var c = Number(num2.value);
  var d = a * c;
  outputHTML(a, b, c, d);
}

function outputHTML(a, b, c, d) {
  output.innerText+=a + " " + b + " " + c + " = " + d + "\n";
}

//Division:
function divideBy() {
  var a = Number(num1.value);
  var b = "/";
  var c = Number(num2.value);
  var d = a / c;
  outputHTML(a, b, c, d);
}

function outputHTML(a, b, c, d) {
  output.innerText+=a + " " + b + " " + c + " = " + d + "\n";
}


//Code for 'Code Cracking' Game

    var output = document.getElementsByClassName("text")[0];  //This points to <h1> within div
    var code = [];  //Secret number generated which the player must guess
    var count = 0;  //Will be used to check how many numbers the player has guessed correctly

    var num1 = document.getElementById("code1");
    var num2 = document.getElementById("code2");
    var num3 = document.getElementById("code3");

    for (var x = 0; x < 3; x++) {
      var randomNumber = Math.floor(Math.random() * 10);
      code.push(randomNumber);
    }
    output.innerText=code;

    function crack() {
      count = 0;
      var guess = [num1.value, num2.value, num3.value];

      for (var x = 0; x < code.length; x++) {
        output.innerText+=checkNumber(guess[x], code[x]);
      }
      if (count === 3) {
        output.innerText+="You've guessed all three numbers!";
      } else {
        output.innerText+="\n";  //Adding a break allows player to try again!
      }
    }

    function checkNumber(a, b) {
      if (a > b) {
        return "L";
      }
      if (a < b) {
        return "H";
      }
      if (a === b) {
        count++;
        return a;
      }
    }

//Code for Word Guessing Game
    var output = document.getElementById("text");  //This points to <h1> within div
    var words = ["HTML", "CSS", "Javascript", "SQL"];
    var indexValue;

    function start() {  //This function is invoked upon button click
      indexValue = Math.floor(Math.random() * words.length);
      var question = "What is the secret word?";
      getSecret(prompt(question));
    }

    function getSecret(secret) {
      if (secret === words[indexValue]) {
        output.innerText = "You've guessed correctly!";
      } else {
        var statement = "Ooops... try again!";
        getSecret(prompt(statement));
      }
    }

//Code for Array Shuffle Function
    var output = document.getElementById("text");

    var words = ["HTML", "CSS", "Javascript", "SQL"];

    function start() {
      shuffleArray(words);
      output.innerText += words + "\n";
    }

    function shuffleArray(array) {
      for (var x = array.length-1; x > 0; x--) {
        var indexValue = Math.floor(Math.random() * (x + 1));  //Generates random array index
        var item = array[x];  //Holds item corresponding to value of 'x'
        array[x] = array[indexValue];

        array[indexValue] = item;  //NB: Do NOT swap these around!
      }
      return array;
    }

// Function that REMOVES duplicates from any Array
var output = document.getElementById("text");

var myArray = ["Hello!", 34, true, "Cheese", 45, "Hello!", 34, 10, false, ["Apple", "Grapes", "Lemon"], 34, 75, "Cheese"];

var cleanArray = removeDup(myArray);
output.innerHTML = myArray + "<br>" + cleanArray;  // Displays old array and cleaned-up array underneath

function removeDup(array) {
  var newArray = [];  // Contains cleaned-up array that new entries can be put into
  var cleanObject = {};  // Holding Object - array values will be set as object keys; you can't add keys which already exist --> prevents duplicates!
  var prop = "";

  for (var x = 0; x < array.length; x++) {  // Loops through array
    // console.log(array[x]);
    cleanObject[array[x]] = "value";  // Set to ANY value - it doesn't matter
  }
  console.log(cleanObject);
  for (prop in cleanObject) {  // Loops through object
    // console.log(prop);
    newArray.push(prop);  // Pushes object keys into fresh array
  }
  return newArray;  // Must return array containng object keys
}


// Function that captures user input and display values on screen
const values = [];  // Array to which we add user input values


function addItem() {
  const inputText = document.getElementById('item').value;  // Captures user input from HTML input tag
  values.push(inputText);
  outputItems();  /* Outputs values to HTML */

  function outputItems() {
    let html = '';
    const output = document.getElementById('text');  /* Points to h1 tag */

    for (let x = 0; x < values.length; x++) {
      html += (x + 1) + '. ' + values[x] + '<br>';  /* Output index value + corresponding item for each iteration */
    }
    output.innerHTML = html;
  }
}
