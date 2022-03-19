(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
	
	data.welcome = options.welcome_word;
	data.username = gs.getUser().getDisplayName().split(' ')[0];
	data.phrase = options.phrase;

	data.urlFirstButton = options.urlFirstButton;
	data.urlSecondButton = options.urlSecondButton;

})();