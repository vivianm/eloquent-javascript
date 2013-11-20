var roads = [{point1: "Point Kiukiu", point2: "Hanaiapa", length: 19},
             {point1: "Point Kiukiu", point2: "Mt Feani", length: 15}
	                  /* and so on */];
 var roads = {"Point Kiukiu": [{to: "Hanaiapa", distance: 19},
  {to: "Mt Feani", distance: 15},
     {to: "Taaoa", distance: 15}],
        "Taaoa": [/* et cetera */]};
var roads = {};
function makeRoad(from, to, length) {
  function addRoad(from, to) {
      if (!(from in roads))
            roads[from] = [];
	        roads[from].push({to: to, distance: length});
		  }
		    addRoad(from, to);
		      addRoad(to, from);
		      }
function makeRoads(start) {
  for (var i = 1; i < arguments.length; i += 2)
      makeRoad(start, arguments[i], arguments[i + 1]);
      }
var roads = {};
makeRoads("Point Kiukiu", "Hanaiapa", 19,
          "Mt Feani", 15, "Taaoa", 15);
	  makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5,
	            "Atuona", 4, "Mt Ootua", 11);
		    makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
		    makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
	 makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
		    makeRoads("Hanapaoa", "Mt Ootua", 3);
	  makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);

		    alert(roads["Airport"]);
function roadsFrom(place) {
  var found = roads[place];
    if (found == undefined)
        throw new Error("No place named '" + place + "' found.");
	  else
	      return found;
	      }

	      alert(roadsFrom("Puamua"));
function gamblerPath(from, to) {
  function randomInteger(below) {
      return Math.floor(Math.random() * below);
        }
	  function randomDirection(from) {
	      var options = roadsFrom(from);
	          return options[randomInteger(options.length)].to;
		    }

		      var path = [];
		        while (true) {
			    path.push(from);
			        if (from == to)
				      break;
				          from = randomDirection(from);
					    }
					      return path;
					      }

		alert(gamblerPath("Hanaiapa", "Mt Feani"));
function member(array, value) {
  var found = false;
    forEach(array, function(element) {
        if (element === value)
	      found = true;
	        });
		  return found;
		  }

		  alert(member([6, 7, "Bordeaux"], 7));
var Break = {toString: function() {return "Break";}};

function forEach(array, action) {
  try {
      for (var i = 0; i < array.length; i++)
            action(array[i]);
	      }
	        catch (exception) {
		    if (exception != Break)
		          throw exception;
			    }
			    }
function any(test, array) {
  for (var i = 0; i < array.length; i++) {
      var found = test(array[i]);
          if (found)
	        return found;
		  }
		    return false;
		    }

		    function member(array, value) {
		      return any(partial(op["==="], value), array);
		      }

		      alert(member(["Fear", "Loathing"], "Denial"));
function every(test, array) {
  for (var i = 0; i < array.length; i++) {
      var found = test(array[i]);
          if (!found)
	        return found;
		  }
		    return true;
		    }

		    show(every(partial(op["!="], 0), [1, 2, -1]));
  function flatten(arrays) {
      var result = [];
          forEach(arrays, function (array) {
	        forEach(array, function (element){result.push(element);});
		    });
		        return result;
			  }
function filter(test, array) {
  var result = [];
    forEach(array, function (element) {
        if (test(element))
	      result.push(element);
	        });
		  return result;
		  }

		  show(filter(partial(op[">"], 5), [0, 4, 8, 12]));
function possibleRoutes(from, to) {
  function findRoutes(route) {
      function notVisited(road) {
            return !member(route.places, road.to);
	        }
		    function continueRoute(road) {
		     return findRoutes({places: route.places.concat([road.to]),
			           length: route.length + road.distance});
						       }

	var end = route.places[route.places.length - 1];
				if (end == to)
				return [route];
				else
	return flatten(map(continueRoute, filter(notVisited,
									                                                      roadsFrom(end))));
															        }
											return findRoutes({places: [from], length: 0});
																  }

										show(possibleRoutes("Point Teohotepapapa", "Point Kiukiu").length);
											show(possibleRoutes("Hanapaoa", "Mt Ootua"));
