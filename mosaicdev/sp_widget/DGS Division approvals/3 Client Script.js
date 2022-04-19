api.controller=function($scope, $rootScope) {
	/* widget controller */
	var c = this;

	$scope.buttonSelected = function(button){
		$rootScope.$broadcast('selected.button_selected', button);
		switch (button) {
			case 'first':
				c.data.first_active =true;
				c.data.second_active = false;
				break;
			case 'second':
				c.data.second_active = true;
				c.data.first_active = false;
				break;
		}
	}
};