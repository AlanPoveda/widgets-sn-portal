(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	data.project = input.project || '';

	//Get the session
	var session = gs.getSession();
	data.sys_id = session.getClientData('portal.project.selected');
	
	var include = new global.AgilePortalUtils();
	
	data.sprints = include.sprintTrackingProjects(data.sys_id);
	
	console.log(data.sprints)
	
	//data.colorStatus = include.getFieldStyle("change_task")
		
	if(input.sprint_validate){
		var grCase = new GlideRecord("sn_customerservice_case");
		grCase.initialize();
		grCase.setValue('short_description', 'Portal de Projetos | Validação de Sprint - ' + input.sprint_validate.name);
		grCase.setValue('account', gs.getUser().getCompanyID());
		grCase.insert();
	}

	
	
})();