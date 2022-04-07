(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	//Pegar o projeto selecionado na seção
		data.test = "opa";
	var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');

	//Pegar script include
	var include = new global.AgilePortalUtils();
	var response = include.getDataProjectStatus(data.project_sys_id);



	data.style = response.style_css.style;
	data.icon = response.style_css.icon;
	data.overall_status = response.overall_health;  

})();