(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.table = input.table || $sp.getParameter('table') || options.table;
	data.record = input.record || $sp.getParameter('sys_id');
	data.field_list = options.field_list;
	data.current_user = gs.getUserID();

	if(!data.record)
		return;

	var gr = $sp.getRecord(data.table, data.record);
	data.fields = $sp.getFields(gr, data.field_list);

	var record = sn_std_tkt_api.TicketConfig.getTicketRecord(data.table, data.record);
	if (record == null)
		return;

	data.canRead = record.canRead();
	if (!data.canRead)
		return;

	//data.variables = new GlobalServiceCatalogUtil().getVariablesForTask(record, true);
	var form = $sp.getForm(data.table, data.record);
	data.variables = form.variables;
	
	
	if(data.variables)
		data.variables_sets = new OnboardingPortalUtils().getVariablesInSections(gr.getValue('cat_item'), data.variables);
	
})();
