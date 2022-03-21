(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	var utils = new global.OnboardingPortalUtils();
	
	data.table = input.table || options.table || $sp.getParameter('table');
	data.filter = options.filter || $sp.getParameter('filter');
	data.field_list = options.display_fields;
	data.field_filter = options.field_filter;
	data.enable_states_filter = options.enable_states_filter.split(',');
	data.group_selected = parseInt($sp.getParameter('group_selected'));

	if(!data.table || !data.field_filter)
		return;

	/*
	 *	Criação do campo de pesquisa Agrupamento de Status 
	 */
	
	data.filter_group = utils.getGroupStates(JSON.parse(gs.getProperty('onboarding.portal.group_state')));
	
	data.enable_states = [];
	// Habilitar states conforme seleção do grupo
	if(input.interactive_filter_group){
		data.enable_states = data.filter_group.filter(function(item, index){
			return (item.value == parseInt(input.interactive_filter_group));
		});
	}
	
	/*
	 * Montagem inicial do filtro
	 */
	if(data.enable_states){
		data.enable_states_filter = (data.enable_states[0].states.split(',') == 'ANYTHING') ? data.enable_states_filter : data.enable_states[0].states.split(',');
		data.new_filter = data.filter + "^" + data.field_filter;
		data.new_filter += (data.enable_states[0].states == 'ANYTHING' ) ? '' : "IN" + data.enable_states[0].states;		
	}

	/*
	 * Montagem de filtro ao selecionar os Grupos e status
	 */
	if(input.interactive_filter){
		// Define o filtro inicial para retornar todos
		if(!input.interactive_filter_group || input.interactive_filter_group == 0){
			data.new_filter = data.filter + "^" + data.field_filter;
		}
		// Aplicação do status selecionado, somado com o filtro do grupo selecionado
		data.new_filter += (input.interactive_filter == 'ANYTHING' ) ? '^' + data.field_filter + 'ANYTHING' :  '^' + data.field_filter + "=" + input.interactive_filter;
	}

	// Caso não tenha um grupo atribuido e status definido, definir query original
	if(!data.new_filter)
		data.new_filter = data.filter;
	
	/*
	 * Criação da Lista de Solicitações
	 */
	data.list = utils.getRequestList(data.table, data.new_filter, data.field_list);
	
	/*
	 * Criação do campo de pesquisa de Status
	 */
	data.search_selector = utils.getChoiceList(data.table, data.field_filter, data.enable_states_filter);


})();