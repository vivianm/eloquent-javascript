var slash = /\//;
show("AC/DC".search(slash));

var asteriskOrBrace = /[\{\*]/;
var story =
  "We noticed the *giant sloth*, hanging from a giant branch.";
  show(story.search(asteriskOrBrace));

  var digitSurroundedBySpace = /\s\d\s/;
  show("1a 2 3d".search(digitSurroundedBySpace));
  var notABC = /[^ABC]/;
  show("ABCBACCBBADABC".search(notABC));

  var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
  show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));

  show(/a+/.test("blah"));
  show(/^a+$/.test("blah"));
