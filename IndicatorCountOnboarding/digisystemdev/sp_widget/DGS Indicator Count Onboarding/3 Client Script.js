function($location, $rootScope) {
	/* widget controller */
	var c = this;


	c.redirectPage = function(page){
		$location.url("?id=" + page + "&account=" + c.data.account + "&filter=" + c.data.filter);
	};

	$rootScope.$on('select.sprint', function(evt, data){
		c.data.sprint =  data;
		c.server.update();
	});

	$rootScope.$on('select.company', function(evt, data){
		c.data.account = data;
		c.server.update();
	});

	console.log(c.data.loggedUser);


}