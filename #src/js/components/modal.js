let info_icon = document.querySelector('.call');
let info_list = document.querySelector('.call__body');
info_icon.addEventListener("click", function (e) {
	info_list.classList.toggle('_active');
});


document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.call')) {
		info_list.classList.remove('_active');
	}
});
