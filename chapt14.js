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
