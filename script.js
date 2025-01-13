var cookieConsentPopup = document.getElementById("cookie-consent-pop-up");
var cookieConsentButton = document.getElementById("cookie-consent-button");

cookieConsentButton.onclick = function() {
    SetCookie("username", "Nerayl", 365);

    if (document.cookie) {
        CloseWindow(cookieConsentPopup);
    }
    else {
        alert("Cookie can't be set!");
    }
}

function ShowCookie(cname) {
    let cookieValues = decodeURIComponent(document.cookie).split(";");
    alert(cookieValues);
}

function SetCookie(cname, cvalue, exdays, cpath = "/") {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();

    // Guarda o valor de uma variável qualquer mesmo que a sessão do usuário seja finalizada
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + cpath;
}

function DeleteCookie(cname, cpath = "/") {
    document.cookie = cname + "=; expires Thu, 01 Jan 1970 00:00:00 UTC; path=" + cpath;
}

function CloseWindow(window) {
    window.style.display = "none";
}