function countLetters(str) {
  var myObject = {};
  var brokenWord = str.split('')
  var noSpaces = brokenWord.filter(brokenWord => brokenWord !== " ");

  noSpaces.forEach(function (eachLetter, index) {

    if (!myObject[eachLetter]) {

      myObject[eachLetter] = [];

    }

    myObject[eachLetter].push(index)

  });

  return myObject;
}






console.log(countLetters("Lighthouse in the house"))