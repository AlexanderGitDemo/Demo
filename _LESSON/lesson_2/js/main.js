$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});


	$('[data-fancybox]').fancybox({
		youtube: {
			controls: 1,
			showinfo: 0
		}
	});

	$('.heroes__slider-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-text',
		prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrow-left.png" alt="prev"></button>',
		nextArrow: '<button class="slick-btn slick-next"><img src="img/arrow-right.png" alt="next"></button>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 6000,
					// dots: true,
					// infinite: true,
					// fade: true,
					// cssEase: 'linear'
				}
			}
		]

	});
	$('.heroes__slider-text').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-image',
		arrows: false
	});



});

