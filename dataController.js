var app = angular.module( 'application' , [] );

app.controller( 'controllerTableScores' , [ '$scope' , '$filter' , function( $scope , $filter){
  var newData = [];
  var studentIdentificationNumber = "Test team";
  var pointsName = "281537";

  for(var i=0; i<data.length; i++) {

      if(i == data.length)
        newData[i] = {
            "studentNumber": data[i][studentIdentificationNumber].slice(1),
            "points": data[i][pointsName]
        } + ',';
    else
      newData[i] = {
            "studentNumber": data[i][studentIdentificationNumber].slice(1),
            "points": data[i][pointsName]
        };
  };

  $scope.scores = newData;

}]);