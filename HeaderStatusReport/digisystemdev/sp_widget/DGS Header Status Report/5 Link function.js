function link(scope, element, attrs, controller) { 

    //Date picker
    scope.isCurrent = true;


	$('#datepicker').val(moment().format('MM/DD/YYYY'));

	$('#datepicker').datepicker();

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


	$('#datepicker').on('change', function (e) {
		var value = $("#datepicker").val();
		scope.generateRange(value);
	});


	scope.generateRange = function(value){
		var today = new Date();
		var firstDate = moment(value, "MM/DD/YYYY").day(0).format("MM/DD/YYYY");
		var lastDate =  moment(value, "MM/DD/YYYY").day(6).format("MM/DD/YYYY");
		scope.weekRange = firstDate + "," + lastDate;
		scope.getWeeklyRange();
		scope.isCurrent = (moment(value, "MM/DD/YYYY").isSame(Date.now(), 'day')) ? true : false;
	}
}