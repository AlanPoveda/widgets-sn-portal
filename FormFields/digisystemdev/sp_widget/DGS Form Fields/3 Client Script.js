api.controller=function($rootScope, $scope, spUtil) {
  /* widget controller */
  var c = this;
	
	spUtil.recordWatch($scope, c.data.table, "requested_for=" + c.data.current_user, function(name) {
		c.server.update();
	});
	
	$rootScope.$on('selected.record', function(evt, data){
		c.data.table = data.table;
		c.data.record = data.sys_id;
		c.server.update();
	});
	
	
};