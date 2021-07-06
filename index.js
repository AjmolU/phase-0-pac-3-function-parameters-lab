const intro = "Hi, my name is ";
const learningTo = "I am learning to program in ";

function introduction(name) {
  return  intro + name + ".";
}

function introductionWithLanguage(name, language) {
  return intro + name + " and " + learningTo + language + ".";
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return intro + name + " and " + learningTo + language + ".";
}