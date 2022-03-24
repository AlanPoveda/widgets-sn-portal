(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.restrict_groups = options.restrict_groups.split(',');
	data.label = input.label || options.label;
	data.label = gs.getMessage(data.label).toUpperCase();
	data.image = options.image_url;
	data.count = 0;
	data.show = true;
		
	if(data.restrict_groups){
		data.restrict_groups.forEach(function(item, index){
			var isMember = gs.getUser().isMemberOf(item);
			if(isMember){	
				data.show = false;
				return;
			}	
		});
	}
	
	data.groupSelected = options.group_selected;

	data.table = input.table || options.table;
	data.sp_page = input.sp_page || options.sp_page || '';

	data.loggedUser = gs.getUserID().toString();
	
	data.filter = 'request.opened_by='+data.loggedUser+'^'+options.filter;
	
	data.count = getRecordCount(data.table, data.filter);

	function getRecordCount(table, filter){
		var ga = new GlideAggregate(table);
		ga.addAggregate('COUNT');
		ga.addEncodedQuery(filter);
		ga.query();
		if(ga.next())
			return  ga.getAggregate('COUNT');	
	}


})();