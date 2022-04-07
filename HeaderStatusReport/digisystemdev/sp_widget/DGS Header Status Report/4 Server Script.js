(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

  //Date picker
  var timeSheetUtils = new global.CollaboratorTimeSheetUtils();

	data.current_week = timeSheetUtils.getCurrentweek();
		
	data.dateWeekRange = timeSheetUtils.getDisplayWeekRange(data.current_week);
	
	if(input.weekSelected)
		data.dateWeekRange = timeSheetUtils.getDisplayWeekRange(input.weekSelected);
})();