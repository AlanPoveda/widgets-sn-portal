(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	//project_status
	data.table = options.table;

	var timeSheetUtils = new global.CollaboratorTimeSheetUtils();

	// Week names Definitions
	data.weekNames = timeSheetUtils.getWeekDays();
	data.shortWeekName = timeSheetUtils.getShortWeekName();
	// Month names Definitions
	data.monthNames = timeSheetUtils.getMonthNames();
	data.shortMonthNames = timeSheetUtils.getShortMonthNames();

	data.current_week = timeSheetUtils.getCurrentweek();
	data.dateWeekRange = timeSheetUtils.getDisplayWeekRange(data.current_week);

	if(input.weekSelected)
		data.dateWeekRange = timeSheetUtils.getDisplayWeekRange(input.weekSelected);


	var weekSelected = input.weekSelected.split(",");
	data.date_start = input.weekSelected == undefined ? new GlideDate() : dateFormat(weekSelected[0]);
	data.date_end = input.weekSelected == undefined ? new GlideDate() : dateFormat(weekSelected[1]);


	//Session
	var session = gs.getSession();
	data.project_sys_id = session.getClientData('portal.project.selected');
	
	// Status Report List
	data.status_report_list = getStatusReports(data.project_sys_id);


	var table = new GlideRecord(data.table);
	table.addEncodedQuery("project="+data.project_sys_id+"^as_onBETWEENjavascript:gs.dateGenerate('"+data.date_start+"','start')@javascript:gs.dateGenerate('"+data.date_end+"','end')");
	table.query();
	if(table.next()){
		data.sys_register = table.getUniqueValue();
	}else{
		data.sys_register = '';
	}


	//Formata a data para poder fazer a busca
	function dateFormat(date){
		var dateObject = new GlideDateTime(date);
		var dateInput = dateObject.getDate();
		var newDateFormat = dateInput.getByFormat('yyyy-MM-dd');
		return newDateFormat
	}

	function getStatusReports(project){
		var enable_dates = []
		var ga = new GlideAggregate('project_status');
		ga.addEncodedQuery('project='+ project +'^ORDERBYas_on');
		ga.query();

		while(ga.next()){
			var gd = new GlideDate();
			gd.setValue(ga.getValue('as_on'));
			enable_dates.push(gd.getByFormat('yyyy/MM/dd'));
		}
		return enable_dates;
	}

})();