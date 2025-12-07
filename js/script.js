"use strict";

(function($) {
	if(!$) {return;}
	$(function() {
		// Добавление карусели
		$(".owl-carousel").owlCarousel({loop : true,
			items: 1,
			margin:130,
			autoplay:true,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			stagePadding: 130,
			dots: false,
			nav: true,
			navText: ['<img class="left-arrow" src="images/strelka_vlevo.svg">','<img class="right-arrow" src="images/strelka_vpravo.svg">'],
			navContainer: '.customNav',
			responsive: {
				// > 0
				0 : {
				dots: false,
				margin:30,
				stagePadding: 30,
				},
				// > 768
				768 : {
					margin:130,
					stagePadding: 130,
				dots: true,
				}
			}
		});
		// Плавный переход по ссылке
		$('nav a').click(function(e){
			e.preventDefault();
			var idel = jQuery(this).attr('href');
			var top = jQuery(idel).offset().top;
			var h = $('#top').innerHeight();
			if($('nav').hasClass('fixed')){
				h+=$('nav').innerHeight();;
			}
			$('body, html').animate({scrollTop:top-h}, 500);
		});

		// Привязка меню к вверху
		if($('#top .general').css('display') === 'none'){
				$('nav').addClass('fixed');
		}

		var funcMenu = function(){
			var t = $('#top').innerHeight();

			if($('#top .general').css('display') === 'none'){
				$('nav').addClass('fixed');
				return;
			}else{
				t = $('nav').innerHeight();
			}

			if(jQuery(this).scrollTop() > (t)){
				$('nav').addClass('fixed');
			}else{
				$('nav').removeClass('fixed');
			}
		};
		
		$(window).resize(funcMenu);
		$(window).scroll(funcMenu);

		// Выпадающее меню
		$('.butmenu').click(function(){
			if($('.menu ul').hasClass('active')){
				$('.menu ul').removeClass('active');
			}else{
				$('.menu ul').addClass('active');
			}
		});
		
	});
})(jQuery);