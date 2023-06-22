const openModalWindodBtn = document.querySelector(".modal-window__openBtn");
const closeModalWindowBtn = document.querySelector(".modal-window__background");
const modalWindow = document.querySelector(".modal-container");

function openModalWindow() {
	modalWindow.style.display = "block";
}

function closeModalWindow() {
	modalWindow.style.display = "none";
}

openModalWindodBtn.addEventListener("click", openModalWindow);
closeModalWindowBtn.addEventListener("click", closeModalWindow);

document.addEventListener('click', function (e) {
	const target = e.target;

	if (target.classList.contains('modal-container')) {
		closeModalWindow()
	}
});
