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
