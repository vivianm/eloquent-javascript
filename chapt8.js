var rabbit = {};
rabbit.speak = function(line) {
  alert("The rabbit says '", line, "'");
  };

  rabbit.speak("Well, now you're asking me.");

  function speak(line) {
    alert("The ", this.adjective, " rabbit says '", line, "'");
    }
    var whiteRabbit = {adjective: "white", speak: speak};
    var fatRabbit = {adjective: "fat", speak: speak};

    whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
    fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Yum."]);
speak.call(fatRabbit, "Burp.");


function Rabbit(adjective) {
  this.adjective = adjective;
    this.speak = function(line) {
        alert("The ", this.adjective, " rabbit says '", line, "'");
	  };
	  }

	  var killerRabbit = new Rabbit("killer");
	  killerRabbit.speak("GRAAAAAAAAAH!");

function makeRabbit(adjective) {
  return {
      adjective: adjective,
          speak: function(line) {/*etc*/}
	    };
	    }

	    var blackRabbit = makeRabbit("black");

show(killerRabbit.constructor);
show(blackRabbit.constructor);

var simpleObject = {};
show(simpleObject.constructor);
show(simpleObject.toString);
show(Rabbit.prototype);
show(Rabbit.prototype.constructor);

show(killerRabbit.toString == simpleObject.toString);

Rabbit.prototype.teeth = "small";
show(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
show(killerRabbit.teeth);
show(Rabbit.prototype.teeth);

Rabbit.prototype.dance = function() {
  alert("The ", this.adjective, " rabbit dances a jig.");
  };

  killerRabbit.dance();

function Rabbit(adjective) {
  this.adjective = adjective;
  }
  Rabbit.prototype.speak = function(line) {
    alert("The ", this.adjective, " rabbit says '", line, "'");
    };

    var hazelRabbit = new Rabbit("hazel");
    hazelRabbit.speak("Good Frith!");

var noCatsAtAll = {};
if ("constructor" in noCatsAtAll)
  alert("Yes, there definitely is a cat called 'constructor'.");

Object.prototype.properties = function() {
  var result = [];
    for (var property in this)
        result.push(property);
	  return result;
	  };

	  var test = {x: 10, y: 3};
	  show(test.properties());

Object.prototype.properties = function() {
  var result = [];
    for (var property in this) {
        if (this.hasOwnProperty(property))
	      result.push(property);
	        }
		  return result;
		  };

		  var test = {"Fat Igor": true, "Fireball": true};
		  show(test.properties());

function forEachIn(object, action) {
  for (var property in object) {
      if (object.hasOwnProperty(property))
            action(property, object[property]);
	      }
	      }

	      var chimera = {head: "lion", body: "goat", tail: "snake"};
	      forEachIn(chimera, function(name, value) {
	        alert("The ", name, " of a ", value, ".");
		});

Object.prototype.properties = function() {
  var result = [];
    for (var property in this)
        result.push(property);
	  return result;
	  };

	  var test = {x: 10, y: 3};
	  show(test.properties());

Object.prototype.properties = function() {
  var result = [];
    for (var property in this) {
        if (this.hasOwnProperty(property))
	      result.push(property);
	        }
		  return result;
		  };

		  var test = {"Fat Igor": true, "Fireball": true};
		  show(test.properties());

function forEachIn(object, action) {
  for (var property in object) {
      if (object.hasOwnProperty(property))
            action(property, object[property]);
	      }
	      }

	      var chimera = {head: "lion", body: "goat", tail: "snake"};
	      forEachIn(chimera, function(name, value) {
	        alert("The ", name, " of a ", value, ".");
		});


function forEachIn(object, action) {
  for (var property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property))
            action(property, object[property]);
	      }
	      }

	      var test = {name: "Mordecai", hasOwnProperty: "Uh-oh"};
	      forEachIn(test, function(name, value) {
	        alert("Property ", name, " = ", value);
		});


var object = {foo: "bar"};
show(Object.prototype.hasOwnProperty.call(object, "foo") &&
     Object.prototype.propertyIsEnumerable.call(object, "foo"));


function Dictionary(startValues) {
  this.values = startValues || {};
  }
  Dictionary.prototype.store = function(name, value) {
    this.values[name] = value;
    };
    Dictionary.prototype.lookup = function(name) {
      return this.values[name];
      };
      Dictionary.prototype.contains = function(name) {
        return Object.prototype.hasOwnProperty.call(this.values, name) &&
	    Object.prototype.propertyIsEnumerable.call(this.values, name);
	    };
	    Dictionary.prototype.each = function(action) {
	      forEachIn(this.values, action);
	      };

	      var colours = new Dictionary({Grover: "blue",
	                                    Elmo: "orange",
	 Bert: "yellow"});
show(colours.contains("Grover"));
show(colours.contains("constructor"));
colours.each(function(name, colour) {
alert(name, " is ", colour);
		});


function Point(x, y) {
  this.x = x;
    this.y = y;
    }
    Point.prototype.add = function(other) {
      return new Point(this.x + other.x, this.y + other.y);
      };
      Point.prototype.isEqualTo = function(other) {
        return this.x == other.x && this.y == other.y;
	};

	show((new Point(3, 1)).add(new Point(2, 4)));


var grid = [["0,0", "1,0", "2,0"],
            ["0,1", "1,1", "2,1"]];
	    show(grid[1][2]);

var grid = ["0,0", "1,0", "2,0",
            "0,1", "1,1", "2,1"];
	    show(grid[2 + 1 * 3]);


function Grid(width, height) {
  this.width = width;
    this.height = height;
      this.cells = new Array(width * height);
      }
      Grid.prototype.valueAt = function(point) {
        return this.cells[point.y * this.width + point.x];
	};
	Grid.prototype.setValueAt = function(point, value) {
	  this.cells[point.y * this.width + point.x] = value;
	  };
	  Grid.prototype.isInside = function(point) {
	    return point.x >= 0 && point.y >= 0 &&
	             point.x < this.width && point.y < this.height;
		     };
		     Grid.prototype.moveValue = function(from, to) {
		       this.setValueAt(to, this.valueAt(from));
		         this.setValueAt(from, undefined);
			 };


Grid.prototype.each = function(action) {
  for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
            var point = new Point(x, y);
	          action(point, this.valueAt(point));
		      }
		        }
			};


var testGrid = new Grid(3, 2);
testGrid.setValueAt(new Point(1, 0), "#");
testGrid.setValueAt(new Point(1, 1), "o");
testGrid.each(function(point, value) {
  alert(point.x, ",", point.y, ": ", value);
  });


var directions = new Dictionary(
  {"n":  new Point( 0, -1),
     "ne": new Point( 1, -1),
        "e":  new Point( 1,  0),
	   "se": new Point( 1,  1),
	      "s":  new Point( 0,  1),
	         "sw": new Point(-1,  1),
		    "w":  new Point(-1,  0),
		       "nw": new Point(-1, -1)});

		       show(new Point(4, 4).add(directions.lookup("se")));


function StupidBug() {};
StupidBug.prototype.act = function(surroundings) {
  return {type: "move", direction: "s"};
  };



var wall = {};

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
    for (var y = 0; y < plan.length; y++) {
        var line = plan[y];
	    for (var x = 0; x < line.length; x++) {
	          grid.setValueAt(new Point(x, y),
		                        elementFromCharacter(line.charAt(x)));
					    }
					      }
					        this.grid = grid;
						}

	function elementFromCharacter(character) {
	 if (character == " ")
		return undefined;
			else if (character == "#")
			 return wall;
				else if (character == "o")
				 return new StupidBug();
			
			
			}



wall.character = "#";
StupidBug.prototype.character = "o";

function characterFromElement(element) {
  if (element == undefined)
      return " ";
        else
	    return element.character;
	    }

	    show(characterFromElement(wall));


Terrarium.prototype.toString = function() {
  var characters = [];
    var endOfLine = this.grid.width - 1;
      this.grid.each(function(point, value) {
          characters.push(characterFromElement(value));
	      if (point.x == endOfLine)
	            characters.push("\n");
		      });
		        return characters.join("");
			};

var terrarium = new Terrarium(thePlan);
alert(terrarium.toString());


function bind(func, object) {
  return function(){
      return func.apply(object, arguments);
        };
	}

	var testArray = [];
	var pushTest = bind(testArray.push, testArray);
	pushTest("A");
	pushTest("B");
	show(testArray);

function method(object, name) {
  return function() {
      return object[name].apply(object, arguments);
        };
	}

	var pushTest = method(testArray, "push");


Terrarium.prototype.listActingCreatures = function() {
  var found = [];
    this.grid.each(function(point, value) {
        if (value != undefined && value.act)
	      found.push({object: value, point: point});
	        });
		  return found;
		  };


Terrarium.prototype.listSurroundings = function(center) {
  var result = {};
    var grid = this.grid;
      directions.each(function(name, direction) {
          var place = center.add(direction);
	      if (grid.isInside(place))
	            result[name] = characterFromElement(grid.valueAt(place));
		        else
			      result[name] = "#";
			        });
				  return result;
				  };




Terrarium.prototype.processCreature = function(creature) {
  var surroundings = this.listSurroundings(creature.point);
    var action = creature.object.act(surroundings);
      if (action.type == "move" && directions.contains(action.direction)) {
          var to = creature.point.add(directions.lookup(action.direction));
	      if (this.grid.isInside(to) && this.grid.valueAt(to) == undefined)
	            this.grid.moveValue(creature.point, to);
		      }
		        else {
	throw new Error("Unsupported action: " + action.type);
			      }
			      };

Terrarium.prototype.step = function() {
  forEach(this.listActingCreatures(),
            bind(this.processCreature, this));
	    };

var terrarium = new Terrarium(thePlan);
alert(terrarium);
terrarium.step();
alert(terrarium);

Point.prototype.toString = function() {
  return "(" + this.x + "," + this.y + ")";
  };
  alert(new Point(5, 5));

var annoy = setInterval(function() {print("What?");}, 400);
clearInterval(annoy);

Terrarium.prototype.start = function() {
  if (!this.running)
      this.running = setInterval(bind(this.step, this), 500);
      };

      Terrarium.prototype.stop = function() {
        if (this.running) {
	    clearInterval(this.running);
	        this.running = null;
		  }
		  };


var printHere = inPlacePrinter();
alertHere("Now you see it.");
setTimeout(partial(printHere, "Now you don't."), 1000);


Terrarium.prototype.step = function() {
  forEach(this.listActingCreatures(),
            bind(this.processCreature, this));
	      if (this.onStep)
	          this.onStep();
		  };

var terrarium = new Terrarium(thePlan);
terrarium.onStep = partial(inPlacePrinter(), terrarium);
terrarium.start();
terrarium.stop();

function elementFromCharacter(character) {
  if (character == " ")
      return undefined;
        else if (character == "#")
	    return wall;
	      else if (character == "o")
	          return new StupidBug();
		  }

var creatureTypes = new Dictionary();
creatureTypes.register = function(constructor) {
  this.store(constructor.prototype.character, constructor);
  };

  function elementFromCharacter(character) {
    if (character == " ")
        return undefined;
	  else if (character == "#")
	      return wall;
	        else if (creatureTypes.contains(character))
		    return new (creatureTypes.lookup(character))();
		      else
		          throw new Error("Unknown character: " + character);
			  }

function BouncingBug() {
  this.direction = "ne";
  }
  BouncingBug.prototype.act = function(surroundings) {
    if (surroundings[this.direction] != " ")
        this.direction = (this.direction == "ne" ? "sw" : "ne");
	  return {type: "move", direction: this.direction};
	  };
	  BouncingBug.prototype.character = "%";

	  creatureTypes.register(BouncingBug);


Dictionary.prototype.names = function() {
  var names = [];
    this.each(function(name, value) {names.push(name);});
      return names;
      };

      show(directions.names());

function randomElement(array) {
  if (array.length == 0)
      throw new Error("The array is empty.");
        return array[Math.floor(Math.random() * array.length)];
	}

	show(randomElement(["heads", "tails"]));

function DrunkBug() {};
DrunkBug.prototype.act = function(surroundings) {
  return {type: "move",
            direction: randomElement(directions.names())};
	    };
	    DrunkBug.prototype.character = "~";

	    creatureTypes.register(DrunkBug);


var newPlan =
  ["############################",
     "#                      #####",
        "#    ##                 ####",
	   "#   ####     ~ ~          ##",
	      "#    ##       ~            #",
	         "#                          #",
		    "#                ###       #",
		       "#               #####      #",
		          "#                ###       #",
			     "# %        ###        %    #",
			        "#        #######           #",
				   "############################"];

				   var terrarium = new Terrarium(newPlan);
	terrarium.onStep = partial(inPlacePrinter(), terrarium);
				   terrarium.start();


terrarium.stop();	

function clone(object) {
  function OneShotConstructor(){}
    OneShotConstructor.prototype = object;
      return new OneShotConstructor();
      }

function LifeLikeTerrarium(plan) {
  Terrarium.call(this, plan);
  }
  LifeLikeTerrarium.prototype = clone(Terrarium.prototype);
  LifeLikeTerrarium.prototype.constructor = LifeLikeTerrarium;
