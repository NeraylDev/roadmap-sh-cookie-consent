var cookieConsentPopup = document.getElementById("cookie-consent-pop-up");
var cookieConsentButton = document.getElementById("cookie-consent-button");

cookieConsentButton.onclick = function() {
    CloseWindow(cookieConsentPopup);
}

function CloseWindow(window) {
    window.style.display = "none";
}