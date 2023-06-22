function show(event, tab) {
	let i, tabsContent, tabsBtn;

	tabsContent = document.getElementsByClassName("tabs-content__item");
	for (i = 0; i < tabsContent.length; i++) {
		tabsContent[i].style.display = "none";
	}

	tabsBtn = document.getElementsByClassName("tabs-nav__btn");
	for (i = 0; i < tabsBtn.length; i++) {
		tabsBtn[i].className = tabsBtn[i].className.replace(" active", "");
	}

	document.getElementById(tab).style.display = "flex";
	event.currentTarget.className += " active";
}
