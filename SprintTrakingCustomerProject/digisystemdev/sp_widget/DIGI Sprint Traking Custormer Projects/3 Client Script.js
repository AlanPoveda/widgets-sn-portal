api.controller=function($scope, $rootScope, spModal,spUtil) {
	/* widget controller */
	var c = this;
	
	//Get project in other widget
	$rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});


	/* Redirect */
	$scope.redirect = function(record){
		
		spModal.open({
			title: '${}',
			widget: 'modal_component_forms',
			widgetInput: {
				sys_id: record.sys_id,
				table: record.table
			},
			buttons: []
		}).then(function(){
			console.log('widget dismissed');
		});
	}
	
	$scope.validateSprint = function(sprint){
		c.data.sprint_validate = sprint;
		c.server.update().then(function(){
			spUtil.addTrivialMessage('${Validation request made, wait for project Engagement Manager approval}');
		});
	}


};