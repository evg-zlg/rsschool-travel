document.querySelector(".js-header-button").addEventListener("click", (e) => {
  document.querySelector(".login-popup").classList.add("login-popup_show");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if ( (document.querySelector(".login-popup").classList.contains("login-popup_show") && (! e.target.closest(".login-popup__body"))) ) {
    document.querySelector(".login-popup").classList.remove("login-popup_show");
  }
});