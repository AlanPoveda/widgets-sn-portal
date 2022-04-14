api.controller=function($rootScope) {
  /* widget controller */
  var c = this;
  
  
	//Comunicação entre um widget quando troca o projeto
  $rootScope.$on('selected.project', function(evt, data){
		c.server.update();
	});
	
		//Pega o sys_id do registro vindo de outro widget
	$rootScope.$on('selected.register', function(evt, data){
		c.data.register_sys_id = data;
		c.server.update();
	});

};