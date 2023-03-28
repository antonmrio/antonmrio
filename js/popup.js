function openPopup(popupId, backgroundId, imageSrc) {
  document.getElementById("popupImage" + popupId.slice(-1)).src = imageSrc;
  document.getElementById(popupId).style.display = "block";
  document.getElementById(backgroundId).style.display = "block";
}

function closePopup(popupId, backgroundId) {
  document.getElementById(popupId).style.display = "none";
  document.getElementById(backgroundId).style.display = "none";
}