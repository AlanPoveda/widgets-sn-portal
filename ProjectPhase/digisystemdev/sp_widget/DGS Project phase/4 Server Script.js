(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');

	//Pegar script include
	var include = new global.AgilePortalUtils();
	var response = include.getDataProjectStatus(data.project_sys_id);

  data.state = response.state;

  
})();