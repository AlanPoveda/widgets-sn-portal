api.controller=function() {
  /* widget controller */
  var c = this;

  $scope.getWeeklyRange = function(){
		c.server.get({'weekSelected': $scope.weekRange})
			.then(function(r){
				c.data.dateWeekRange = r.data.dateWeekRange;
				console.log($scope.weekRange)
		});
	};

 
};

