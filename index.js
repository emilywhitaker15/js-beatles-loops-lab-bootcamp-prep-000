function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var musiciansInstruments = []
  var i;
  for (i = 0; i < arrayMusicians.length; i++) {
    musiciansInstruments.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return musiciansInstruments
}

function johnLennonFacts(facts) {