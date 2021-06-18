//Phone Dropdown
let phoneIcon = document.querySelector('.phone__icon');
let phoneBody = document.querySelector('.phone__body');

if (phoneIcon) {
	phoneIcon.addEventListener("click", function (e) {
		phoneBody.classList.toggle('_active');
		phoneIcon.classList.toggle('_active');	
	});

	document.documentElement.addEventListener("click", function (e) {
		if (!e.target.closest('.phone, .phone__icon')) {
			phoneBody.classList.remove('_active');
			phoneIcon.classList.remove('_active');
		}
	});
}

//=================
//menuIconClick
if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__link');
	if (menuArrows.length>0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e){
				e.preventDefault();
				menuArrow.parentElement.classList.toggle("_active");
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}