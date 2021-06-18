const priceFilter = document.querySelector('.price-filter__slider');

if (priceFilter) {
	noUiSlider.create(priceFilter, {
		 start: [1000, 10000],
		 connect: true,
		 tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
		 range: {
			  'min': [0],
			  'max': [15000]
		 }
	});
	
	const priceStart = document.getElementById("filter-price__start");
	const priceEnd = document.getElementById("filter-price__end");
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	
	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value !='') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value !='') {
			priceEndValue = priceEnd.value;
		}
		priceFilter.noUiSlider.set([priceStartValue, priceEndValue]);
	}

	// Вывод цен в инпут
	const snapValues = [
		document.getElementById('filter-price__start'),
		document.getElementById('filter-price__end')
	];
	priceFilter.noUiSlider.on('update', function (values, handle) {
		snapValues[handle].value = values[handle];
	});
	
}

