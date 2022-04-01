(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.label = input.label || options.label;
	data.label = gs.getMessage(data.label);
	data.count = 0;

	data.table = input.table || options.table;
	data.sp_page = input.sp_page || options.sp_page || "";

	var include = new global.AgilePortalUtils();
	
	data.sprints = include.sprintTrackingProjects(data.sys_id);

	var session = gs.getSession();
	data.sys_id = session.getClientData('portal.project.selected');

	data.sprints = include.sprintTrackingProjects(data.sys_id, options.filter);
	

	var totalPoints = 0;
	
	data.sprints.forEach(function(item){
		totalPoints += parseInt(item.points);
	})
	
	data.count = totalPoints;


})();
