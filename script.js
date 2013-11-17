var total = 0, count = 1;
while (count <= 10) {
  total += count;
    count += 1;
    }
    alert("Total of numbers incrementing by one from 1 to 10 is " + total);

var caught = 5 * 5;
alert("Result of 5 * 5 is \n" + caught);
alert("Avocados");
alert(Math.max(2, 4));
alert(Math.min(2, 4) + 100);
alert(confirm("Shall we, then?"));
alert(prompt("Tell us everything you know.", "..."));
var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " +
      (theNumber * theNumber));
var currentNumber = 0;
while (currentNumber <= 12) {
  alert(currentNumber);
    currentNumber = currentNumber + 2;
    }
var answer;
while (true) {
  answer = prompt("You! What is the value of 2 + 2?", "");
    if (answer == "4") {
        alert("You must be a genius or something.");
	    break;
	      }
	        else if (answer == "3" || answer == "5") {
		    alert("Almost!");
		      }
		        else {
			    alert("You're an embarrassment.");
			      }
			      }
