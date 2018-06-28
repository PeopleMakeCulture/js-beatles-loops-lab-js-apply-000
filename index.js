function theBeatlesPlay (musician, instrument){
  //create an empty array stored in a variable
  var theyPlayThese = [];

  //contain a for loop which loops over array of musicians

  for (i = 0; i<musicians.length; i++) {
    var hePlaysThis = '${musician} plays ${instrument}';
    theyPlayThese.push(hePlaysThis);
  }
  //NOTE: be careful about value for counter variable (Hint: think about first index of array)
  //first time through the loop should create a string
  //add string to empty array
  //function should return array of strings
  return theyPlayThese

}
