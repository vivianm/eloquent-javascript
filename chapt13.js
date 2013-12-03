attach(window.open("example_events.html"));

$("button").attachEvent("onclick", function(){print("Click!");});

$("button").addEventListener("click", function(){print("Click!");},
                             false);

function registerEventHandler(node, event, handler) {
  if (typeof node.addEventListener == "function")
      node.addEventListener(event, handler, false);
        else
	    node.attachEvent("on" + event, handler);
	    }

	    registerEventHandler($("button"), "click",
	                         function(){print("Click (2)");});
