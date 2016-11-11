var Score  = (function () {
  var i; //for testing

  // the module API
  function PublicScore() {
    throw new Error('The constructor is private, please use Score.makeNewScore.');
  }

  // The private constructor
  var Score = function () {

  };
  
  //create a new instance of Score
  function createScore(){
    var instance = new Score();
    PublicScore.instance = instance;
    return instance;
  }

  // Now use either
  Score.prototype = PublicScore.prototype; // to make .constructor == PublicScore


  // The preferred smart constructor
  PublicScore.mkNewScore = function () {

    //return reference to instance or create a reference if it doesn't exist
    if(!PublicScore.instance)
      return  createScore();
    else 
      return PublicScore.instance;
  };

  return PublicScore;
}());


//unit tests
var s1 = Score.mkNewScore() ;
s1.i = 5;
var s2 = Score.mkNewScore() ;
s2.i = 6;
var s3 = Score.mkNewScore() ;
s3.i = 7;
console.log(s1.i);
console.log(s3.i);
