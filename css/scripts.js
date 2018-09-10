const FR_MENU = {
	
};

function generateMenu() {
	
}

function updatePageMenu() {
	const menuDiv = document.getElementById("tavern-menu");
	if (menuDiv) {
		menuDiv.innerHTML = "hello world";
	}
}

window.onload = updatePageMenu;
