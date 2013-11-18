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
HEAD
var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " +
      (theNumber * theNumber));
var currentNumber = 0;
while (currentNumber <= 12) {
  alert(currentNumber);
    currentNumber = currentNumber + 2;
 HEAD
   }
   var currentNumber = 0;
   while (currentNumber <= 12) {
     alert(currentNumber);
       currentNumber = currentNumber + 2;
       }
       var result = 1;
       for (var counter = 0; counter < 10; counter = counter + 1)
         result = result * 2;
	 alert(result);
	var line = "";
	for (var counter = 0; counter < 10; counter = counter + 1) {
	  line = line + "#";
	    alert(line);

	    }
	       for (var number = 0; number <= 12; number = number + 2)
	         alert(number);
	         counter = counter + 1;
		 }
		 for (var counter = 0; counter < 20; counter++) {
		   if (counter % 3 == 0 && counter % 4 == 0)
		       alert(counter);
		       }
		       for (var counter = 0; counter < 20; counter++) {
		         if (counter > 15)
			     alert(counter + "**");
			       else if (counter > 10)
			           alert(counter + "*");
				     else
				         alert(counter);
 HEAD
	
	}
	for (var current = 20; current % 7 != 0; current++);
	  alert(current);
	  var value = null;
	  while (value != "4") {
	    value = prompt("You! What is the value of 2 + 2?", "");
	      if (value == "4")
	          alert("You must be a genius or something.");
		    else if (value == "3" || value == "5")
		        alert("Almost!");
			  else
			      alert("You're an embarrassment.");
	
	}
	// The variable counter, which is about to be defined, is going
	// to start with a value of 0, which is zero.
	var counter = 0;
	// Now, we are going to loop, hold on to your hat.
	while (counter < 100 /* counter is less than one hundred */)
	/* Every time we loop, we INCREMENT the value of counter,
	   Seriously, we just add one to it. */
	     counter++;
	     // And then, we are done.
    }
 HEAD
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
 HEAD
			      }
HEAD
break
break

					 }
	var answer = prompt("You! What is the value of 2 + 2?", "");
	if (answer == "4")
	 alert("You must be a genius or something.");
	  else if (answer == "3" || answer == "5")
		   alert("Almost!");
			    else
		    alert("You're an embarrassment.");
for (var current = 20; ; current++) {
  if (current % 7 == 0)
      break;
      }
      alert(current);
      prompt

			      var mysteryVariable;
			      alert(mysteryVariable);
			      alert(alert("I am a side effect."));
			     alert(false == 0);
			     alert("" == 0);
			     alert("5" == 5);
			     alert(null === undefined);
			     alert(false === 0);
			     alert("" === 0);
			     alert("5" === 5);
			     var maybeNull = null;
	 // ... mystery code that might put a string into maybeNull ...
			     if (maybeNull)
			       print("maybeNull has a value");
alert("Apollo" + 5);
alert(null + "ify");
alert("5" * 5);
alert("strawberry" * 5);
 undefined

    var input = prompt("What is your name?", "Kilgore Trout");
    alert("Well hello " + (input || "dear"));
 operators
function add(a, b) {
  return a + b;
  }

  alert(add(2, 2));
  function power(base, exponent) {
    var result = 1;
      for (var count = 0; count < exponent; count++)
          result *= base;
	    return result;
	    }

	    alert(power(2, 10));
	    function absolute(number) {
	      if (number < 0)
	          return -number;
		    else
		        return number;
			}

			alert(absolute(-144));
			function yell(message) {
			  alert(message + "!!");
			  }

			  yell("Yow");
			  function alertIsPrint(value) {
			    var alert = print;
			      alert(value);
			      }

			      alertIsPrint("Troglodites");

			      var variable = "top-level";

			      function printVariable() {
 alert("inside printVariable, the variable holds '" + variable + "'.");
					}

		function test() {
		var variable = "local";
	 alert("inside test, the variable holds '" + variable + "'.");
			 alertVariable();
					  }

					 test();
var variable = "top-level";
function parentFunction() {
  var variable = "local";
    function childFunction() {
        alert(variable);
	  }
	    childFunction();
	    }
	    parentFunction();
	    var something = 1;
	    {
	      var something = 2;
	        alert("Inside: " + something);
		}
		alert("Outside: " + something);

		var variable = "top-level";
		function parentFunction() {
		  var variable = "local";
		    function childFunction() {
		        alert(variable);
			  }
			    return childFunction;
			    }

			    var child = parentFunction();
			    child();
			    function makeAddFunction(amount) {
			      function add(number) {
			          return number + amount;
				    }
				      return add;
				      }

				      var addTwo = makeAddFunction(2);
				      var addFive = makeAddFunction(5);
				      alert(addTwo(1) + addFive(1));
function power(base, exponent) {
  if (exponent == 0)
      return 1;
        else
	    return base * power(base, exponent - 1);
	    }
function findSequence(goal) {
  function find(start, history) {
      if (start == goal)
            return history;
	        else if (start > goal)
		      return null;
		          else
	return find(start + 5, "(" + history + " + 5)") ||
		find(start * 3, "(" + history + " * 3)");
					       }
					         return find(1, "1");
						 }

						 alert(findSequence(24));
function greaterThan(x) {
  return function(y) {
      return y > x;
        };
	}

	var greaterThanTen = greaterThan(10);
	alert(greaterThanTen(9));
	alert("Hello", "Good Evening", "How do you do?", "Goodbye");
 function
 var cat = {colour: "grey", name: "Spot", size: 46};
 cat.size = 47;
 alert(cat.size);
 delete cat.size;
 alert(cat.size);
 alert(cat);
 var empty = {};
 empty.notReally = 1000;
 alert(empty.notReally);
