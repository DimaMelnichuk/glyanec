//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let advantagesSlider = new Swiper('.advantages__slider-container', {
	spaceBetween: 30,
	speed: 800,
	loop: true,
	
	navigation: {
		nextEl: '.advantages__slider-next',
		prevEl: '.advantages__slider-prev',
	},
	
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},

});


let mainSlider = new Swiper('.main-screen__slider', {
	slidesPerView: 1,
	pagination: {
		el: '.main-screen__slider-pagination',
		type: "fraction",
	},
	// Arrows
	navigation: {
		nextEl: '.main-screen__slider-next',
		prevEl: '.main-screen__slider-prev',
	},
	// thumbs
	thumbs: {
		swiper: {
			el: '.main-screen__thumbs-container',
			simulateTouch: false,
			autoHeight: true,
			allowTouchMove: false,
		}
	},
});

