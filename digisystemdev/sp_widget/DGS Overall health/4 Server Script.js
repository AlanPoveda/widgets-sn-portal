(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	//Pegar o projeto selecionado na seção
	
	//"project=e6dfbec31b87f010033e6280f54bcb98^as_onON2022-04-13@javascript:gs.dateGenerate('2022-04-13','start')@javascript:gs.dateGenerate('2022-04-13','end')"

	var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');

	//Pegar script include
	var include = new global.AgilePortalUtils();
	var response = include.getDataProjectStatus(input.register_sys_id);



	data.style = response.style_css.style;
	data.icon = response.style_css.icon;
	data.overall_status = gs.getMessage(response.overall_health);  

})();