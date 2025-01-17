document.addEventListener('DOMContentLoaded', function () {
	// Smooth scroll
	let anchors = document.querySelectorAll('form[action*="#"]')

	for (anchor of anchors) {
		if (anchor) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				anchorId = this.getAttribute('action')
				document.querySelector(anchorId).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			})
		}
	}

	// Menu

	function toggleMenu() {
		$('.menu-toggle').toggleClass('menu-toggle_active')
		$('.top-menu').toggleClass('top-menu_active')
	}

	$('.menu-toggle').click(function () {
		toggleMenu()
	})

	function closeMenu() {
		$('.menu-toggle').removeClass('menu-toggle_active')
		$('.top-menu').removeClass('top-menu_active')
	}

	$(document).click(function (e) {
		if ($(e.target).closest('.menu-container').length) return
		closeMenu()
	})

	//Micromodal

	MicroModal.init({
		openTrigger: 'data-custom-open',
		closeTrigger: 'data-custom-close',
		disableScroll: true,
		disableFocus: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	})
	$('[data-custom-open]').click(function () {
		$('.modal [name=form]').val($(this).data('form'))
	})
	$('[data-custom-close]').click(function () {
		$('.modal [name=form]').val('')
	})

	// Swiper Sliders

	const homeSlider = new Swiper('.home-slider', {
		speed: 800,
		effect: 'fade',
		centeredSlides: true,
		pagination: {
			el: '.home-slider__pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let indT = total >= 10 ? total : `0${total}`
				let indC = current >= 10 ? current : `0${current}`
				return `<b>${indC}</b><span></span> ${indT}`
			},
		},
		scrollbar: {
			el: '.home-siler__scrollbar',
			draggable: true,
		},
		navigation: {
			prevEl: '.home-slider__prev',
			nextEl: '.home-slider__next',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		runCallbacksOnInit: true,
	})

	const advSlider = new Swiper('.advantages-slider', {
		effect: 'fade',
		speed: 1400,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	})

	const thumbsSwiper = new Swiper('.product-slider-thumbs', {
		spaceBetween: 20,
		slidesPerView: 5,
	})

	const productSlider = new Swiper('.product-slider', {
		speed: 400,
		spaceBetween: 100,
		loop: true,
		grab: true,
		grabCursor: true,
		thumbs: {
			swiper: thumbsSwiper,
		},
	})

	// Callback List Numbers

	$('.home-callback__list li').each(function () {
		$(this).html(
			$(this)
				.text()
				.replace(/([0-9.]+)/g, '<span>$1</span>')
		)
	})
})
