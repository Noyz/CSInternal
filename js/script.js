$(document).ready(function(){
	/** Corporate **/
	$('.tabpanels__nav__btn').on('click', function(){
		$('.tabpanels__nav__btn a').removeClass('tabpanels__nav__btn--selected');
		$(this).find('a').toggleClass('tabpanels__nav__btn--selected');
	});


});