(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	data.project = input.project || '';

	data.initial_date = gs.getMessage("Initial date");
	data.total_stories_points = gs.getMessage("Total stories points")
	
	data.sprint = input.sprint;
	data.sprint_id = input.record;
	//Get the session
	var session = gs.getSession();
	data.sys_id = session.getClientData('portal.project.selected');

	session.putClientData('portal.sprint.selected', input.sprint_id);
	
	var include = new global.AgilePortalUtils();
	
	data.sprints = include.sprintTrackingProjects(data.sys_id);
	
		
	if(input.sprint_validate){
		var grCase = new GlideRecord("sn_customerservice_case");
		grCase.initialize();
		grCase.setValue('short_description', 'Portal de Projetos | Validação de Sprint - ' + input.sprint_validate.name);
		grCase.setValue('account', gs.getUser().getCompanyID());
		grCase.insert();
	}

	
	
})();