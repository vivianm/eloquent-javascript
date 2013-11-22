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
