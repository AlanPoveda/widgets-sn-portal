api.controller=function() {
  /* widget controller */
  var c = this;
	 $rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});
	
};