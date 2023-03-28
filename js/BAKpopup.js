/* eslint-env es6 */ 
function openPopup(imageSrc) {
	document.getElementById("popupImage").src = imageSrc;
	document.getElementById("popup").style.display = "block";
	document.querySelector(".background").style.display = "block";
}

function closePopup() {
	document.getElementById("popup").style.display = "none";
	document.querySelector(".background").style.display = "none";
}