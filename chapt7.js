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
