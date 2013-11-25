var slash = /\//;
show("AC/DC".search(slash));

var asteriskOrBrace = /[\{\*]/;
var story =
  "We noticed the *giant sloth*, hanging from a giant branch.";
  show(story.search(asteriskOrBrace));

  var digitSurroundedBySpace = /\s\d\s/;
  show("1a 2 3d".search(digitSurroundedBySpace));
