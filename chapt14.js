function makeHttpObject() {
  try {return new XMLHttpRequest();}
    catch (error) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
	  try {return new ActiveXObject("Microsoft.XMLHTTP");}
	    catch (error) {}

	      throw new Error("Could not create HTTP request object.");
	      }

	      console.log(typeof(makeHttpObject()));


var request = makeHttpObject();
request.open("GET", "files/fruit.txt", false);
request.send(null);
console.log(request.responseText);
console.log(request.getAllResponseHeaders());
show(request.getResponseHeader("Last-Modified"));
request.open("GET", "files/fruit.xml", true);
request.send(null);
show(request.responseText);
console.log(request.responseText);

request.open("GET", "files/fruit.xml", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
      console.log(request.responseText.length);
      };
 HEAD
var catalog = request.responseXML.documentElement;
console.log(catalog.childNodes.length);


request.open("GET", "files/fruit.json", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
      console.log(request.responseText);
      };


function evalJSON(json) {
  return eval("(" + json + ")");
  }
  var fruit = evalJSON(request.responseText);
  console.log(fruit);





function serializeJSON(value) {
  function isArray(value) {
      return /^\s*function Array/.test(String(value.constructor));
        }

	  function serializeArray(value) {
	      return "[" + map(serializeJSON, value).join(", ") + "]";
	        }
		  function serializeObject(value) {
		      var properties = [];
		          forEachIn(value, function(name, value) {
			        properties.push(serializeString(name) + ": " +
				                      serializeJSON(value));
						          });
		 return "{" + properties.join(", ") + "}";
							        }
		function serializeString(value) {
					var special =
		{"\"": "\\\"", "\\": "\\\\", "\f": "\\f", "\b": "\\b",
									           "\n": "\\n", "\t": "\\t", "\r": "\\r", "\v": "\\v"};
										       var escaped = value.replace(/[\"\\\f\b\n\t\r\v]/g,
										                                       function(c) {return special[c];});
														           return "\"" + escaped + "\"";
															     }

															       var type = typeof value;
													 if (type == "object" && isArray(value))
														return serializeArray(value);
																 else if (type == "object")
													  return serializeObject(value);
														 else if (type == "string")
														 return serializeString(value);
																		   else
														 return String(value);
																		       }

														 print(serializeJSON(fruit));


										
										function simpleHttpRequest(url, success, failure) {
										  var request = makeHttpObject();
										    request.open("GET", url, true);
										      request.send(null);
										        request.onreadystatechange = function() {
											    if (request.readyState == 4) {
											          if (request.status == 200)
												          success(request.responseText);
													        else if (failure)
														 failure(request.status, request.statusText);
															    }
															      };
															      }

											 simpleHttpRequest("files/fruit.txt", console.log);


										do {
										  var answer = prompt("Say 'moo'.", "");
										    console.log("You said '", answer, "'.");
										    } while (answer != "moo");

										for (var i = 0; i < 10; i++) {
										  if (i % 3 != 0)
										      continue;
										        console.log(i, " is divisible by three.");
											}


										outer: for (var sideA = 1; sideA < 10; sideA++) {
										  inner: for (var sideB = 1; sideB < 10; sideB++) {
										      var hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
										          if (hypotenuse % 1 == 0) {
											        console.log("A right triangle with straight sides of length ",
												            sideA, " and ", sideB, " has a hypotenuse of ",
													                hypotenuse, ".");
															      break outer;
															          }
																    }
																    }



										function weatherAdvice(weather) {
										  switch(weather) {
										      case "rainy":
										            console.log("Remember to bring an umbrella.");
											          break;
												      case "sunny":
												            console.log("Dress lightly.");
													        case "cloudy":
														      console.log("Go outside.");
														            break;
															        default:
												 console.log("Unknown weather type: ", weather);
																            break;
																	      }
																	      }

													 weatherAdvice("sunny");


										var scope = "outside";
										var object = {name: "Ignatius", scope: "inside"};
										with(object) {
										  console.log("Name == ", name, ", scope == ", scope);
										    name = "Raoul";
										      var newVariable = 49;
										      }
										      console.log(object.name);
										      console.log(newVariable);




										function BinaryHeap(scoreFunction){
										  this.content = [];
										    this.scoreFunction = scoreFunction;
										    }

										    BinaryHeap.prototype = {
										      push: function(element) {
										          // Add the new element to the end of the array.
											      this.content.push(element);
											          // Allow it to bubble up.
												      this.bubbleUp(this.content.length - 1);
												        },

													  pop: function() {
													  // Store the first element so we can return it later.
													          var result = this.content[0];
														  // Get the element at the end of the array.
														          var end = this.content.pop();
											 // If there are any elements left, put the end element at the
															     // start, and let it sink down.
														 if (this.content.length > 0) {
																      this.content[0] = end;
																	    this.sinkDown(0);
																		      }
																 return result;
																			    },

													 remove: function(node) {
																			          var length = this.content.length;
																				      // To remove a value, we must search through the array to find
																				          // it.
																					      for (var i = 0; i < length; i++) {
																					            if (this.content[i] != node) continue;
																						   // When it is found, the process seen in 'pop' is repeated
																							        // to fill up the hole.
																								      var end = this.content.pop();
																				  // If the element we popped was the one we needed to remove,
																									          // we're done.
																										 if (i == length - 1) break;
																					 // Otherwise, we replace the removed element with the popped
																					  // one, and allow it to float up or sink down as appropriate.
																								 this.content[i] = end;
																													        this.bubbleUp(i);
																														      this.sinkDown(i);
																														            break;
																															        }
																																  },

																																    size: function() {
																																        return this.content.length;
																																	  },

																																	    bubbleUp: function(n) {
																																	        // Fetch the element that has to be moved.
																														 var element = this.content[n], score = this.scoreFunction(element);
																																 // When at 0, an element can not go up any further.
																																			    while (n > 0) {
																																  // Compute the parent element's index, and fetch it.
																																	 var parentN = Math.floor((n + 1) / 2) - 1,
																																		 parent = this.content[parentN];
																														  // If the parent has a lesser score, things are in order and we
																																						  // are done.
																																							        if (score >= this.scoreFunction(parent))
																																								        break;

																																									      // Otherwise, swap the parent with the current element and
																																									            // continue.
																																										          this.content[parentN] = element;
																																											        this.content[n] = parent;
																																												      n = parentN;
																																												          }
																																													    },

																																													      sinkDown: function(n) {
																																										  // Look up the target element and its score.
																																											  var length = this.content.length,
																																														 element = this.content[n],
																																											  elemScore = this.scoreFunction(element);

																																															          while(true) {
																																												  // Compute the indices of the child elements.
																																									  var child2N = (n + 1) * 2, child1N = child2N - 1;
																																																	            // This is used to store the new position of the element,
																																																		          // if any.
																																																			        var swap = null;
																																																				      // If the first child exists (is inside the array)...
																																																				            if (child1N < length) {
																																																					            // Look it up and compute its score.
																																																						            var child1 = this.content[child1N],
																																																				  child1Score = this.scoreFunction(child1);
																																																			  // If the score is less than our element's, we need to swap.
																																																					 if (child1Score < elemScore)
																																																						 swap = child1N;
																																																											            }
																																																												          // Do the same checks for the other child.
																																																													        if (child2N < length) {
																																																														        var child2 = this.content[child2N],
																																																															        child2Score = this.scoreFunction(child2);
																																																													if (child2Score < (swap == null ? elemScore : child1Score))
																																																																	          swap = child2N;
																																																																		        }

																																																															 // No need to swap further, we are done.
																																																															 if (swap == null) break;

																																																																 // Otherwise, swap and continue.
																																																																					        this.content[n] = this.content[swap];
																																																																						      this.content[swap] = element;
																																																																						            n = swap;
																																																																							        }
																																																																								  }
																																																																								  };
var heap = new BinaryHeap(function(x){return x;});
forEach([10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5],
        method(heap, "push"));

	heap.remove(2);
	while (heap.size() > 0)
	  console.log(heap.pop());
 chapter14
