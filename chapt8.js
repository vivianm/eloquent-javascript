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
