attach(window.open("example_events.html"));

$("button").attachEvent("onclick", function(){print("Click!");});

$("button").addEventListener("click", function(){print("Click!");},
                             false);
