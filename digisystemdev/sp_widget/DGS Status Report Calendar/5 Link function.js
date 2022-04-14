function link(scope, element, attrs, controller) {

	scope.isCurrent = true;
	

	$('#datepicker').val(moment().format('MM/DD/YYYY'));

	$('#datepicker').datepicker({
		dayNames: scope.data.weekNames,
		dayNamesMin: scope.data.shortWeekName,
		monthNames: scope.data.monthNames,
		monthNamesShort: scope.data.shortMonthNames,
		beforeShowDay: function(date){
		
			if($.inArray($.datepicker.formatDate('yy/mm/dd', date), scope.data.status_report_list) > -1)
				return [true, "", "${Status Report}"];
			else
				return [false, "", "${No data}"]
		},
		onSelect: function (dateText, inst) {
			var dates = {
				lastDate: moment(dateText, "MM/DD/YYYY").day(6).format("MM/DD/YYYY"),
				selectedDay: dateText
			};

			scope.generateRange(dateText);

			scope.getDate(dates);   
		}
	});



	$('.next-day').on('click', function () {
		var date = $('#datepicker').datepicker('getDate');
		date.setDate(date.getDate() +7)
		$('#datepicker').datepicker('setDate', date);
		scope.generateRange($("#datepicker").val());
	});

	$('.prev-day').on('click', function () {
		var date = $('#datepicker').datepicker('getDate');
		date.setDate(date.getDate() -7)
		$('#datepicker').datepicker('setDate', date);
		scope.generateRange($("#datepicker").val());
	});

	$('.today-date').on('click', function () {
		var date = moment().format('MM/DD/YYYY');
		$('#datepicker').datepicker('setDate', date);
		scope.generateRange($("#datepicker").val());
	});


	//$('#datepicker').on('change', function (e) {
	//var value = $("#datepicker").val();
	//scope.generateRange(value);
	//});


	scope.generateRange = function(value){
		var today = new Date();
		var firstDate = moment(value, "MM/DD/YYYY").day(0).format("MM/DD/YYYY");
		var lastDate =  moment(value, "MM/DD/YYYY").day(6).format("MM/DD/YYYY");
		var weekRange = firstDate + "," + lastDate;
		scope.getWeeklyRange(weekRange);
		//scope.isCurrent = (moment(value, "MM/DD/YYYY").isSame(Date.now(), 'day')) ? true : false;
	}

}