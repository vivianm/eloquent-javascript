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
