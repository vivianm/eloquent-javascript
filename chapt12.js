console.log(document.body);
console.log(document.body.parentNode);
console.log(document.body.childNodes.length);
console.log(document.documentElement.firstChild);
console.log(document.documentElement.lastChild);
console.log(document.body.previousSibling);
console.log(document.body.nextSibling);
function isTextNode(node) {
  return node.nodeType == 3;
  }

  console.log(isTextNode(document.body));
  console.log(isTextNode(document.body.firstChild.firstChild));
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstChild.firstChild.nodeValue);

function isImage(node) {
  return !isTextNode(node) && node.nodeName == "IMG";
  }

  console.log(isImage(document.body.lastChild));

function asHTML(node) {
  if (isTextNode(node))
      return escapeHTML(node.nodeValue);
        else if (node.childNodes.length == 0)
	    return "<" + node.nodeName + "/>";
	      else
	          return "<" + node.nodeName + ">" +
		             map(asHTML, node.childNodes).join("") +
			                "</" + node.nodeName + ">";
					}

					console.log(asHTML(document.body));

console.log(document.body.innerHTML);

document.body.firstChild.firstChild.nodeValue =
  "Chapter 1: The deep significance of the bottle";
  document.body.firstChild.innerHTML =
    "Did you know the 'blink' tag yet? <blink>Joy!</blink>";

var picture = document.getElementById("picture");
console.log(picture.src);
picture.src = "img/ostrich.png";

function $(id) {
  return document.getElementById(id);
  }
  console.log($("picture"));

console.log(document.body.getElementsByTagName("BLINK")[0]);


var secondHeader = document.createElement("H1");
var secondTitle = document.createTextNode("Chapter 2: Deep magic");

secondHeader.appendChild(secondTitle);
document.body.appendChild(secondHeader);

var newImage = document.createElement("IMG");
newImage.setAttribute("src", "img/Hiva Oa.png");
document.body.appendChild(newImage);
console.log(newImage.getAttribute("src"));


function setNodeAttribute(node, attribute, value) {
  if (attribute == "class")
      node.className = value;
        else if (attribute == "checked")
	    node.defaultChecked = value;
	      else if (attribute == "for")
	          node.htmlFor = value;
		    else if (attribute == "style")
		        node.style.cssText = value;
			  else
			      node.setAttribute(attribute, value);
			      }


function dom(name, attributes) {
  var node = document.createElement(name);
    if (attributes) {
        forEachIn(attributes, function(name, value) {
	      setNodeAttribute(node, name, value);
	          });
		    }
		      for (var i = 2; i < arguments.length; i++) {
		          var child = arguments[i];
			      if (typeof child == "string")
			            child = document.createTextNode(child);
				        node.appendChild(child);
					  }
					    return node;
					    }

					    var newParagraph = 
dom("P", null, "A paragraph with a ",
	dom("A", {href: "http://en.wikipedia.org/wiki/Alchemy"},
		link"),
		" inside of it.");
		document.body.appendChild(newParagraph);


var link = newParagraph.childNodes[1];
newParagraph.insertBefore(dom("STRONG", null, "great "), link);

newParagraph.replaceChild(document.createTextNode("lousy "),
                          newParagraph.childNodes[1]);

newParagraph.removeChild(newParagraph.childNodes[1]);

function removeElement(node) {
  if (node.parentNode)
      node.parentNode.removeChild(node);
      }

      removeElement(newParagraph);

 makeTable([{Tree: "Apple", Flowers: "White"},
            {Tree: "Coral", Flowers: "Red"},
	               {Tree: "Pine",  Flowers: "None"}],
		                 ["Tree", "Flowers"]);


function makeTable(data, columns) {
  var headRow = dom("TR");
    forEach(columns, function(name) {
        headRow.appendChild(dom("TH", null, name));
	  });

	    var body = dom("TBODY", null, headRow);
	      forEach(data, function(object) {
	          var row = dom("TR");
		      forEach(columns, function(name) {
		       row.appendChild(dom("TD", null, String(object[name])));
			        });
				    body.appendChild(row);
				      });

				        return dom("TABLE", null, body);
					}

		var table = makeTable(document.body.childNodes,
					     ["nodeType", "tagName"]);
				document.body.appendChild(table);

setNodeAttribute($("picture"), "style",
                 "border-width: 4px; border-style: solid;");
