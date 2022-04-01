function($location, $rootScope) {
	/* widget controller */
	var c = this;
	
	//Get project in other widget
	$rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});

}