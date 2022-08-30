//при нажатии на кнопку login открываем login popup, body.overflow задаём hidden
document.querySelector(".js-header-button").addEventListener("click", (e) => {
  let loginPopUp = document.querySelector(".login-popup");
  if (!loginPopUp.classList.contains("login-popup_show")) {
    loginPopUp.classList.add("login-popup_show");
    document.body.style.overflow = "hidden";
    e.stopPropagation();
  } 
});

document.addEventListener("click", (e) => {
  let loginPopup = document.querySelector(".login-popup");
  const withinBoundareies = e.composedPath().includes("loginPopup");
  console.log("document click");
  if ( ! withinBoundareies ) {
    console.log("within if");
    loginPopup.classList.remove("login-popup_show");
    document.body.style.overflow = "visible";
  }
});