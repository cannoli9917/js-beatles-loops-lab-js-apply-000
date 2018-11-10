// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesList = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesList.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesList;
}

function johnLennonFacts(facts) {
  var factList = [];
  for (var i = 0; i < facts.length; i++){
    factList.push(`${facts[i]}!!!`);
  }
  return factList;
 }