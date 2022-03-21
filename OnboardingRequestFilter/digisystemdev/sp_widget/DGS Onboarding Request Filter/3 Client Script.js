api.controller=function($timeout, $rootScope, $scope, spUtil) {
	/* widget controller */
	var c = this;

	c.selectOptions = {
		hideSearch: true,
		allowClear: true
	};

	c.init = function(){
		c.selectorGroup = c.data.group_selected || 0;
		c.selectorState = null;
		if(c.data.group_selected)
			c.selectFilter();
	}

	spUtil.recordWatch($scope, c.data.table, c.options.filter, function(name) {
		c.server.update();
	});

	c.selectFilterGroup = function(){
		$timeout(function(){
			c.data.interactive_filter_group = c.selectorGroup || '0';
			c.data.interactive_filter = c.selectorState || 'ANYTHING';
			c.server.update().then(function(){
				c.selectorState = null;
				var state = c.data.filter_group.filter(function(item, index){
					return item.value === c.selectorGroup;
				});	
				var data = [
					{"url": '', "label": state[0].label}
				];
				$rootScope.$broadcast('sp.update.breadcrumbs', data);
			});
		});
	}

	c.selectFilter = function(){
		$timeout(function(){
			c.data.interactive_filter_group = c.selectorGroup || '0';
			c.data.interactive_filter = c.selectorState || 'ANYTHING';
			c.server.update();
		});
	}

	c.setRecord = function(item){
		var data = {
			"sys_id": item.sys_id,
			"table": item.table
		};
		$rootScope.$broadcast('selected.record', data);
		c.setBreadcrumbs(item);
	}


	c.setBreadcrumbs = function(item){
		var state = c.data.filter_group.filter(function(item, index){
			return item.value === c.selectorGroup;
		});	
		var data = [
			{"url": '', "label": state[0].label},
			{"url": item.sys_id, "label": item.title}
		];
		$rootScope.$broadcast('sp.update.breadcrumbs', data);

	}



};