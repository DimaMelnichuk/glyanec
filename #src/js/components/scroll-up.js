const scrollUp = document.querySelector('.scroll-up');
const offsetScroll = 100;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// onScroll
window.addEventListener('scroll', () => {
	if (getTop() > offsetScroll) {
		scrollUp.classList.add('scroll-up--active');
	} else {
		scrollUp.classList.remove('scroll-up--active');
	}
});

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});