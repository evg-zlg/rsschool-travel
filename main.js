document.querySelector(".js-header-button").addEventListener("click", () => {
  let loginPopUp = document.querySelector(".login-popup");
  if (loginPopUp.classList.contains("login-popup_show")) {
    loginPopUp.classList.add("login-popup_show");
    document.body.style.overflow = "hidden";

  } 
});