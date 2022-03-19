(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	
	data.welcome = gs.getMessage(options.welcome_word);
	data.username = gs.getUser().getDisplayName().split(' ')[0];
	data.phrase = options.phrase;

	data.urlFirstButton = options.url_first_button;
	data.urlSecondButton = options.url_second_button;

})();