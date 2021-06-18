/***************** Overlay on click  ********************/
document.querySelectorAll('.block__slider-item').forEach((item) =>
	item.addEventListener('click', () => {
		const contentItem = item;

		if (contentItem.classList.contains('_active')) {
			contentItem.classList.remove('_active');
		} else {
			document
				.querySelectorAll('.block__slider-item')
				.forEach((child) => child.classList.remove('_active')) // if needs just one active
				contentItem.classList.add('_active');
		}
	})
);