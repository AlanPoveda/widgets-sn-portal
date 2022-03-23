function($rootScope, $scope, spUtil) {
  var c = this;
	
	c.color = function(state,index){
		 return ((state.order > c.data.active_order) || ((c.data.state.length - index) == 2) || !c.data.show);
	}
	
	spUtil.recordWatch($scope, c.data.table, "requested_for=" + c.data.current_user, function(name) {
		c.server.update();
	});
	
	$rootScope.$on('selected.record', function(evt, data){
		c.data.table = data.table;
		c.data.record = data.sys_id;
		c.server.update();
	});
	
	
}