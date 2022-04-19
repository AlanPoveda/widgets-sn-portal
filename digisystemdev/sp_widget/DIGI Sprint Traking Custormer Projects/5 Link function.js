function link(scope, element, attrs, controller) {


	$(document).on('click','.open-accordion', function(){
		$(this).toggleClass('active');

		$(this).parents('.accordion').find('.accordion-body').slideToggle('slow');
	});

	
	$(document).on('click', '.sprint-record', function(e){
		e.preventDefault();
		$('.navbar-nav li').find('a').removeClass('active');
		$(".navbar-nav li a[ng-href='?id=sprint_stories']").addClass('active');
	});


}