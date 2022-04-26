api.controller=function(spModal, $rootScope, $scope) {
	/* widget controller */
	var c = this;

	
		c.approved = function(){
		spModal.open({
			message: c.data.approve_message+"!",
			buttons: []
		})
	}
	
	
	
	c.rejected = function(){
		spModal.open({
			widget: "dgs__reject_and_approved_info",
			buttons: []
		})
		
		
	}
	
	
	// Envia para os widgets se foi selecionado ou não o checkbox
	var checkboox = false;
	c.selectedAll = function(){
		checkboox = !checkboox;
		$rootScope.$broadcast("selected.button_all", checkboox);
	}
	
	// Recebe uma lista de sys_ids de registros, que foram selecionados
	$rootScope.$on("selected.list_records", function(evt, data){
		console.log("sys_id sucesso" + data);
		c.server.update().then(function(){
			c.data.list_records = data;
		});
	})
	
};