const body = document.querySelector('body');
const toggle = document.querySelector('.checkbox-off__checkmark');
const input = document.querySelector('.checkbox-off__input');

toggle.addEventListener("click", function() {
	const isChecked = input.checked;
	if (isChecked) {
		body.classList.remove('_night');
		toggle.classList.remove('_active');
	} else {
		body.classList.add('_night');
		toggle.classList.add('_active');
	}
});
