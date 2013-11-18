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
