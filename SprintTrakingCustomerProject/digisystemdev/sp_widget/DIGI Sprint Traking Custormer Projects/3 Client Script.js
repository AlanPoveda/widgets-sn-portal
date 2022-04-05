api.controller=function($scope, $rootScope, spModal,spUtil, $location) {
	/* widget controller */
	var c = this;
	
	//Get project in other widget
	$rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});


	c.redirectPage = function(sprint){
		c.data.sprint_id = sprint;
		c.server.update().then(function(){
			$location.url("?id=sprint_stories");
		});
			
	};



};