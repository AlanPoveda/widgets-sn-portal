api.controller=function($rootScope) {
	/* widget controller */
	var c = this;
	$rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});

	//Recebendo a data de outros componentes
	$rootScope.$on('selected.date', function(evt, data){
		c.server.update();
	});

	//Recebendo o sys_id do registro
	$rootScope.$on('selected.register', function(evt, data){
		c.data.register_sys_id = data;
		c.server.update();
	});


};