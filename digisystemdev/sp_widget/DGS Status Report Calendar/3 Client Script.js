api.controller=function($scope, $rootScope, $timeout) {
	/* widget controller */
	var c = this;

	c.init = function(){
		$timeout(function(){
			c.server.update().then(function(){
				$rootScope.$broadcast('selected.register', c.data.sys_register);
			});
		});
	}

	c.init();

	//Atualização automática do projeto, quando alterado
	$rootScope.$on('selected.project', function(evt, data){
		c.server.update().then(function(){
			$rootScope.$broadcast('selected.register', c.data.sys_register);
		});
	});


	//Seleciona a semana pelos botões
	$scope.getWeeklyRange = function(week){
		c.data.weekSelected = week;
		c.server.update().then(function(){
			$rootScope.$broadcast('selected.register', c.data.sys_register);
		});

	};




	//Enviando a data para outros componentes
	$scope.getDate = function(date){
		c.data.dates = date;
		c.server.update().then(function(){
			$rootScope.$broadcast('selected.register', c.data.sys_register);
		});
	}




};