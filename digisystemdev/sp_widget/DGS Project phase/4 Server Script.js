(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.title = gs.getMessage(options.title.toUpperCase());
	data.table = options.table;

	var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');

	
	
	var table = new GlideRecord(data.table);
	table.addEncodedQuery("sys_id="+input.register_sys_id);
	table.query();
	if(table.next()){
		data.state = table.getDisplayValue('state');
	}else{
		data.state = gs.getMessage("No phase");
	}

	


})();