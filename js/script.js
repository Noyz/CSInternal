$(document).ready(function(){
	/** Header **/
		$('.headernav__burgermenu').on('click', function(){
			$(this).toggleClass('open');
		});

		if($(document).width() < 771){
			$('.headernav__menu__item--submenu a').on('click', function(){
				$('.headernav__menu__item--submenu').toggleClass('submenu-visible');
			});
		}
		$(window).on('resize', function(){
			console.log('resize')
			if($(document).width() < 771){
				$('.headernav__menu__item--submenu a').on('click', function(){
					$('.headernav__menu__item--submenu').toggleClass('submenu-visible');
				});
			}
		});


	/** Corporate nav**/
	$('.tabpanels__nav__btn a').on('click', function(e){
		$('.tabpanels__nav__btn a').removeClass('tabpanels__nav__btn--selected');
		$(this).addClass('tabpanels__nav__btn--selected');
		$('.tabpanels__panel').hide();
		$( $(this).attr('href')  ).show();
		e.preventDefault();
	});

	/** Corporate panels**/
	for(var i = 0; i < $('.events__carouselbox__content__item').length; i++){
		$('.events__carouselbox__buttons').append('<a class="events__carouselbox__buttons__item" href="#"></a>');
	}
	$('.events__carouselbox__buttons__item:eq(0)').addClass('selected');

	$('.events__carouselbox__buttons__item').on('click', function(e){
		e.preventDefault();
		$('.events__carouselbox__buttons a').removeClass('selected');
		$(this).addClass('selected');
		$('.events__carouselbox__content__item').eq( $(this).index() ).show()
			.siblings('.events__carouselbox__content__item').hide();
	});

	/** Corporate mobile **/
	$('.tabpanels__container__nav--mobile select').on('change', function(){
		var panelIdentifier = $(this).find("option:selected").attr("spareValue");
		$('.tabpanels__panel').hide();
		$('#'+ panelIdentifier).show();
	});

});