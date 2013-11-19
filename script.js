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
 var thing = {"gabba gabba": "hey", "5": 10};
 alert(thing["5"]);
 thing["5"] = 20;
 alert(thing[2 + 3]);
 delete thing["gabba gabba"];
 var chineseBox = {};
 chineseBox.content = chineseBox;
 alert("content" in chineseBox);
 alert("content" in chineseBox.content);
 var set = {"Spot": true};
 // Add "White Fang" to the set
 set["White Fang"] = true;
 // Remove "Spot"
 delete set["Spot"];
 // See if "Asoka" is in the set
 alert("Asoka" in set);
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

alert(object1 == object2);
alert(object1 == object3);

object1.value = 15;
alert(object2.value);
alert(object3.value);
var mailArchive = {"the first e-mail": "Dear nephew, ...",
                   "the second e-mail": "..."
		                      /* and so on ... */};
	var mailArchive = {0: "Dear nephew, ... (mail number 1)",
		            1: "(mail number 2)",
			    2: "(mail number 3)"};

 for (var current = 0; current in mailArchive; current++)
alert("Processing e-mail #", current, ": ", mailArchive[current]);
var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
  alert("Processing e-mail #", current, ": ", mailArchive[current]);
  function range(upto) {
    var result = [];
      for (var i = 0; i <= upto; i++)
          result[i] = i;
	    return result;
	    }
	    alert(range(4));
var doh = "Doh";
alert(typeof doh.toUpperCase);
alert(doh.toUpperCase());
var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
alert(mack.join(" "));
alert(mack.pop());
alert(mack);
var mailArchive = retrieveMails();

for (var i = 0; i < mailArchive.length; i++) {
  var email = mailArchive[i];
    alert("Processing e-mail #", i);
      // Do more things...
      }
      var words = "Cities of the Interior";
      alert(words.split(" "));
      var array = ["a", "b", "c d"];
      alert(array.join(" ").split(" "));
      var paragraph = "born 15-11-2003 (mother Spot): White Fang";
      alert(paragraph.charAt(0) == "b" && paragraph.charAt(1) == "o" &&
           paragraph.charAt(2) == "r" && paragraph.charAt(3) == "n");
	   function startsWith(string, pattern) {
	     return string.slice(0, pattern.length) == pattern;
	     }

	     alert(startsWith("rotation", "rot"));
	     alert("Pip".charAt(250));
	     alert("Nop".slice(1, 10));
	     function catNames(paragraph) {
	       var colon = paragraph.indexOf(":");
	         return paragraph.slice(colon + 2).split(", ");
		 }

		 alert(catNames("born 20/09/2004 (mother Yellow Bess): " +
		               "Doctor Hobbles the 2nd, Noog"));
			       var mailArchive = retrieveMails();
			       var livingCats = {"Spot": true};

	for (var mail = 0; mail < mailArchive.length; mail++) {
		var paragraphs = mailArchive[mail].split("\n");
				   for (var paragraph = 0;
				          paragraph < paragraphs.length;
					         paragraph++) {
		if (startsWith(paragraphs[paragraph], "born")) {
 var names = catNames(paragraphs[paragraph]);
	for (var name = 0; name < names.length; name++)
	livingCats[names[name]] = true;
									     }
									         else if (startsWith(paragraphs[paragraph], "died")) {
										       var names = catNames(paragraphs[paragraph]);
										             for (var name = 0; name < names.length; name++)
											             delete livingCats[names[name]];
												         }
													   }
													   }

													   alert(livingCats);
										if ("Spot" in livingCats)
										  alert("Spot lives!");
										  else
										    alert("Good old Spot, may she rest in peace.");
for (var cat in livingCats)
  alert(cat);
  function addToSet(set, values) {
    for (var i = 0; i < values.length; i++)
        set[values[i]] = true;
	}

	function removeFromSet(set, values) {
	  for (var i = 0; i < values.length; i++)
	      delete set[values[i]];
	      }
	      var livingCats = {Spot: true};

	      for (var mail = 0; mail < mailArchive.length; mail++) {
	        var paragraphs = mailArchive[mail].split("\n");
		  for (var paragraph = 0;
		         paragraph < paragraphs.length;
			        paragraph++) {
	if (startsWith(paragraphs[paragraph], "born"))
 addToSet(livingCats, catNames(paragraphs[paragraph]));
else if (startsWith(paragraphs[paragraph], "died"))
	removeFromSet(livingCats, catNames(paragraphs[paragraph]));
						        
						    }
						      }
function findLivingCats() {
  var mailArchive = retrieveMails();
    var livingCats = {"Spot": true};

      function handleParagraph(paragraph) {
          if (startsWith(paragraph, "born"))
	        addToSet(livingCats, catNames(paragraph));
		    else if (startsWith(paragraph, "died"))
		          removeFromSet(livingCats, catNames(paragraph));
			    }

	for (var mail = 0; mail < mailArchive.length; mail++) {
		  var paragraphs = mailArchive[mail].split("\n");
	   for (var i = 0; i < paragraphs.length; i++)
	        handleParagraph(paragraphs[i]);
					      }
					        return livingCats;
						}

			var howMany = 0;
			for (var cat in findLivingCats())
			 howMany++;
		alert("There are ", howMany, " cats.");
		var when = new Date(1980, 1, 1);
		alert(when);
		alert(new Date());
		alert(new Date(1980, 1, 1));
		alert(new Date(2007, 2, 30, 8, 20, 30));
		var today = new Date();
		alert("Year: ", today.getFullYear(), ", month: ",
		      today.getMonth(), ", day: ", today.getDate());
		      alert("Hour: ", today.getHours(), ", minutes: ",
		      today.getMinutes(), ", seconds: ", today.getSeconds());
			    alert("Day of week: ", today.getDay());
			    var today = new Date();
			    alert(today.getTime());
			    var wallFall = new Date(1989, 10, 9);
			    var gulfWarOne = new Date(1990, 6, 2);
			    alert(wallFall < gulfWarOne);
			    alert(wallFall == wallFall);
			    // but
			    alert(wallFall == new Date(1989, 10, 9));
			    var wallFall1 = new Date(1989, 10, 9),
			        wallFall2 = new Date(1989, 10, 9);
			alert(wallFall1.getTime() == wallFall2.getTime());
			var now = new Date();
			alert(now.getTimezoneOffset());
			function extractDate(paragraph) {
			  function numberAt(start, length) {
		 return Number(paragraph.slice(start, start + length));
			        }
     return new Date(numberAt(11, 4), numberAt(8, 2) - 1,
				                    numberAt(5, 2));
						    }

	alert(extractDate("died 27-04-2006: Black LeclÎáÎéÎýre"));
	function catRecord(name, birthdate, mother) {
	  return {name: name, birth: birthdate, mother: mother};
	  }

	  function addCats(set, names, birthdate, mother) {
	    for (var i = 0; i < names.length; i++)
	        set[names[i]] = catRecord(names[i], birthdate, mother);
		}
		function deadCats(set, names, deathdate) {
		  for (var i = 0; i < names.length; i++)
		      set[names[i]].death = deathdate;
		      }
		      function extractMother(paragraph) {
		 var start = paragraph.indexOf("(mother ") + "(mother ".length;
			  var end = paragraph.indexOf(")");
			    return paragraph.slice(start, end);
			    }

 alert(extractMother("born 15/11/2003 (mother Spot): White Fang"));
 function between(string, start, end) {
   var startAt = string.indexOf(start) + start.length;
     var endAt = string.indexOf(end, startAt);
       return string.slice(startAt, endAt);
       }
       alert(between("bu ] boo [ bah ] gzz", "[ ", " ]"));
       function findCats() {
         var mailArchive = retrieveMails();
	   var cats = {"Spot": catRecord("Spot", new Date(1997, 2, 5),
	                 "unknown")};

			   function handleParagraph(paragraph) {
			       if (startsWith(paragraph, "born"))
addCats(cats, catNames(paragraph), extractDate(paragraph),
				        extractMother(paragraph));
	else if (startsWith(paragraph, "died"))
 deadCats(cats, catNames(paragraph), extractDate(paragraph));
							       }

 for (var mail = 0; mail < mailArchive.length; mail++) {
	var paragraphs = mailArchive[mail].split("\n");
		 for (var i = 0; i < paragraphs.length; i++)
	 handleParagraph(paragraphs[i]);
									         }
										   return cats;
										   }

										   var catData = findCats();
										   function formatDate(date) {
										     return date.getDate() + "/" + (date.getMonth() + 1) +
										              "/" + date.getFullYear();
											      }

											      function catInfo(data, name) {
											        if (!(name in data))
												    return "No cat by the name of " + name + " is known.";

												      var cat = data[name];
												  var message = name + ", born " + formatDate(cat.birth) +
													            "from mother " + cat.mother;
															  if ("death" in cat)
												 message += ", died " + formatDate(cat.death);
															        return message + ".";
																}

													alert(catInfo(catData, "Fat Igor"));
											function formatDate(date) {
											  function pad(number) {
											      if (number < 10)
											            return "0" + number;
												        else
													      return number;
													        }
											 return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) +
														               "/" + date.getFullYear();
															       }
												alert(formatDate(new Date(2000, 0, 1)));
										function oldestCat(data) {
										  var oldest = null;

										    for (var name in data) {
										        var cat = data[name];
											    if (!("death" in cat) &&
											            (oldest == null || oldest.birth > cat.birth))
												          oldest = cat;
													    }

													      if (oldest == null)
													          return null;
														    else
														        return oldest.name;
															}

															alert(oldestCat(catData));
function range(start, end) {
  if (arguments.length < 2) {
      end = start;
          start = 0;
	    }
	      var result = [];
	        for (var i = start; i <= end; i++)
		    result.push(i);
		      return result;
		      }

		      alert(range(4));
		      alert(range(2, 4));
		      function sum(numbers) {
		        var total = 0;
			  for (var i = 0; i < numbers.length; i++)
			      total += numbers[i];
			        return total;
				}

				alert(sum(range(1, 10)));
function between(string, start, end) {
  var startAt = string.indexOf(start);
    if (startAt == -1)
        return undefined;
	  startAt += start.length;
	    var endAt = string.indexOf(end, startAt);
	      if (endAt == -1)
	          return undefined;

		    return string.slice(startAt, endAt);
		    }
var input = prompt("Tell me something", "");
var parenthesized = between(input, "(", ")");
if (parenthesized != undefined)
  alert("You parenthesized '", parenthesized, "'.");
  function lastElement(array) {
    if (array.length > 0)
        return array[array.length - 1];
	  else
	      return undefined;
	      }

	      alert(lastElement([1, 2, undefined]));
	      function lastElement(array) {
	        if (array.length > 0)
		    return array[array.length - 1];
		      else
		     throw "Can not take the last element of an empty array.";
			  }

			  function lastElementPlusTen(array) {
			    return lastElement(array) + 10;
			    }

			    try {
			      print(lastElementPlusTen([]));
			      }
			      catch (error) {
			        alert("Something went wrong: ", error);
				}
				var currentThing = null;

				function processThing(thing) {
				  if (currentThing != null)
	 throw "Oh no! We are already processing a thing!";

				        currentThing = thing;
					  /* do complicated processing... */
					    currentThing = null;
					    }
function processThing(thing) {
  if (currentThing != null)
      throw "Oh no! We are already processing a thing!";

        currentThing = thing;
	  try {
	      /* do complicated processing... */
	        }
		  finally {
		      currentThing = null;
		        }
			}
try {
  alert(Sasquatch);
  }
  catch (error) {
    alert("Caught: " + error.message);
    }
    throw new Error("Fire!");
    var FoundSeven = {};

    function hasSevenTruths(object) {
      var counted = 0;

        function count(object) {
	    for (var name in object) {
	          if (object[name] === true) {
		          counted++;
			          if (counted == 7)
				            throw FoundSeven;
					          }
	else if (typeof object[name] == "object") {
		count(object[name]);
			}
								          }
}									    }
}
									      trtry {
									          count(object);
										      return false;
										        }
											  catch (exception) {
											      if (exception != FoundSeven)
											            throw exception;
												        return true;
													  }
													  }
										function printArray(array) {
										  for (var i = 0; i < array.length; i++)
										      alert(array[i]);
										      }
										     function forEach(array, action) {
										       for (var i = 0; i < array.length; i++)
										           action(array[i]);
											   }

											   forEach(["Wampeter", "Foma", "Granfalloon"], alert);
function sum(numbers) {
  var total = 0;
    forEach(numbers, function (number) {
        total += number;
	  });
	    return total;
	    }
	    alert(sum([1, 10, 100]));
function negate(func) {
  return function(x) {
      return !func(x);
        };
	}
	var isNotNaN = negate(isNaN);
	alert(isNotNaN(NaN));
	alert(Math.min.apply(null, [5, 6]));

	function negate(func) {
	  return function() {
	      return !func.apply(null, arguments);
	        };
		}
function reduce(combine, base, array) {
  forEach(array, function (element) {
      base = combine(base, element);
        });
	  return base;
	  }

	  function add(a, b) {
	    return a + b;
	    }

	    function sum(numbers) {
	      return reduce(add, 0, numbers);
	      }
function countZeroes(array) {
  function counter(total, element) {
      return total + (element === 0 ? 1 : 0);
        }
	  return reduce(counter, 0, array);
	  }
function count(test, array) {
  return reduce(function(total, element) {
      return total + (test(element) ? 1 : 0);
        }, 0, array);
	}

	function equals(x) {
	  return function(element) {return x === element;};
	  }

	  function countZeroes(array) {
	    return count(equals(0), array);
	    }
function map(func, array) {
  var result = [];
    forEach(array, function (element) {
        result.push(func(element));
	  });
	    return result;
	    }

	    alert(map(Math.round, [0.01, 2, 9.89, Math.PI]));
function processParagraph(paragraph) {
  var header = 0;
    while (paragraph.charAt(0) == "%") {
        paragraph = paragraph.slice(1);
	    header++;
	      }

	        return {type: (header == 0 ? "p" : "h" + header),
		          content: paragraph};
			  }

			  alert(processParagraph(paragraphs[0]));
