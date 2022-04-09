(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
  data.icon = options.icon_url;
  data.table = options.table;
  data.label = options.label;
	var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');

	//Pegar script include
	// var include = new global.AgilePortalUtils();
	// var response = include.getDataProjectStatus(data.project_sys_id);

  var table = new GlideRecord(data.table);
  table.addEncodedQuery("project="+data.project_sys_id);
  table.query();
  if(table.next()){
    data.content = table.getDisplayValue(data.label);
  }
  //data.content = "opa <h1> ola </h1>"
  
	//data.executive_summary = response.executive_summary;
})();