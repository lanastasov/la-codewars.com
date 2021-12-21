function meeting(s) {
  var names = s.split(";").map((x) => x.toUpperCase());
  names.sort();
  var swap = [];
  for (var i = 0; i < names.length; i++) {
    swap.push(
      names[i].split(":")[1].toUpperCase() +
        ", " +
        names[i].split(":")[0].toUpperCase()
    );
  }
  swap.sort();
  var result = "";
  for (var j = 0; j < swap.length; j++) {
    result += "(" + swap[j] + ")";
  }
  return result;
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:Stan;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
