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
