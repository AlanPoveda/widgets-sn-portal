api.controller=function($rootScope) {
  /* widget controller */
  var c = this;
  
  
	//Comunicação entre um widget quando troca o projeto
  $rootScope.$on('selected.project', function(evt, data){
		c.server.update().then(function(){
      console.log(c.data.style);
      console.log(c.data.overall_status);
    });
	});

};