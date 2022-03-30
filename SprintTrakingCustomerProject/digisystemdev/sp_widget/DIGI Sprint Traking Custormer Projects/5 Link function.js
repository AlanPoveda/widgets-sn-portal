function link(scope, element, attrs, controller) {


	$(document).on('click','.open-accordion', function(){
		$(this).toggleClass('active');

		$(this).parents('.accordion').find('.accordion-body').slideToggle('slow');
	});



}