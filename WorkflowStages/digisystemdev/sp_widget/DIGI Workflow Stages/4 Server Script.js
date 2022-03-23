(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.table = input.table|| $sp.getParameter("table");
	data.record = input.record || $sp.getParameter("sys_id");
	data.current_user = gs.getUserID();

	if(!data.table || !data.record)
		return;

	var gr = new GlideRecord(data.table);
	gr.get(data.record)
	data.currentTable = '';
	data.atualKey = '';
	data.canRead = gr.canRead();

	var fields = $sp.getField(gr, 'stage');
	data.flow = createProcessFlow(data.table, data.record);

	// Check the process flow query against the current job to see if the conditions match

	function getCurrentSteps(step, table, id) {


		var gnr = new GlideRecord(table);
		gnr.addEncodedQuery(step);
		gnr.addQuery('sys_id', id);
		gnr.query();
		if (gnr.next()) 
			return 'warning';
		else 
			return 'primary';
	}

	// Set the previous steps in the flow to success if the current step is further down the order
	function ActiveSuccess(items) {
		var i = 0;
		for (var key in items) {
			var value = items[key];

			data.atualKey = key;
			if (value.colour == 'warning') {
				var index = i;
				for (var j = 0; j<i; j++) {
					items[j].colour = 'success';
				}
				if (index == items.length) {
					value.colour = 'sucess';
				}
				break;
			}
			i++;
		}

		return items;
	}


	function createProcessFlow(table, id) {
		console.log(id);

		var gf = new GlideRecord('sys_process_flow');
		gf.addActiveQuery();
		gf.addQuery('table', table);
		gf.orderBy('order');
		gf.query();

		data.currentTable = table;
		var items = [];

		var count = 0;

		while (gf.next()) {

			count++;

			var item = {};
			item.name = gs.getMessage(gf.getDisplayValue("label"));
			item.number = count;
			item.stage = gf.getValue('condition');
			item.colour = getCurrentSteps(item.stage, table, id);
			items.push(item);

		}

		items = ActiveSuccess(items);
		return items;

	}

})();