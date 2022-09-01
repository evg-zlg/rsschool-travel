//функция открывает окно login popup
function openLoginPopup() {
  const loginPopUp = document.querySelector(".login-popup");
  if (!loginPopUp.classList.contains("login-popup_show")) {
    loginPopUp.classList.add("login-popup_show");
    document.body.style.overflow = "hidden";  
  }; 
  
};

//при нажатии на кнопку login открываем login popup, body.overflow задаём hidden
document.querySelector(".js-header-button").addEventListener("click", (e) => {
  openLoginPopup();
  e.stopPropagation();
});


//при нажатии на кнопку Registered в окне login popup открываем sign up, прямчем login popup
document.querySelector(".js-login-popup__register").addEventListener("click", (e) => {
  document.querySelector(".sign-up").classList.add("sign-up_show");
  document.querySelector(".login-popup").classList.remove("login-popup_show");
  e.stopPropagation();
  
});

// при нажатии на ссылку Log in в окне sign up открываем login popup, прячем sign up
document.querySelector(".js-sign-up__login-link").addEventListener("click", (e) => {
  document.querySelector(".sign-up").classList.remove("sign-up_show");
  document.querySelector(".login-popup").classList.add("login-popup_show");
  e.stopPropagation();
});

// слушаем клик на документе для разных целей
document.addEventListener("click", (e) => {  
  let loginPopup = document.querySelector(".login-popup");
  let signUp = document.querySelector(".sign-up");
  // если открыто login popup и кликнули вне окна login popup - прячем login popun и возвращаем body
  if ( (loginPopup.classList.contains("login-popup_show") ) && (! e.target.closest(".login-popup__body"))) {
    loginPopup.classList.remove("login-popup_show");
    document.body.style.overflow = "visible";
  }
  if ( (signUp.classList.contains("sign-up_show") ) && (! e.target.closest(".sign-up__body"))) {
    signUp.classList.remove("sign-up_show");
    document.body.style.overflow = "visible";
  }
  //если клик по ссылке внутри бургер меню - закрываем бургер меню
  if ( (e.target.classList.contains("menu__link")) && (document.querySelector(".menu-burger").classList.contains("menu-burger_open")) ) {
    closeBurger();
    //если клик по ссылке Account - открыть login popup
    if (e.target.classList.contains("js-menu_open-login") ) {
      openLoginPopup();
    };
  };
});

//функция открывает бургер меню
function openBurger() {
  document.querySelector(".menu-desktop").classList.add("menu-desktop_isBurger");
    // добавить модификатор open
    document.querySelector(".menu-burger").classList.add("menu-burger_open");
    let items = document.querySelectorAll(".menu__item");
    // отобразить элементы меню
    items.forEach((item) => {
      item.style.display = "block";
      if (item.classList.contains("menu__item_dontShow")) {
        item.classList.remove("menu__item_dontShow");
      };
    });
    document.body.style.overflow = "hidden"
}
//функция закрывает бургер
function closeBurger() {
  document.querySelector(".menu-desktop").classList.remove("menu-desktop_isBurger");
  document.querySelector(".menu-burger").classList.remove("menu-burger_open");
  let items = document.querySelectorAll(".menu__item");
  items.forEach((item) => {
    item.style.display = "none";
  });
  // двум последним элементам меню бургер добавляем модификатор 
  items[items.length-1].classList.add("menu__item_dontShow");
  items[items.length-2].classList.add("menu__item_dontShow");
  document.body.style.overflow = "visible"
}

//открываем меню бургер при клике на кнопке
document.querySelector(".menu-burger__button").addEventListener("click", (e) => {
  //если бургер открыт - закрываем, если бургер закрыт - открываем
  if (document.querySelector(".menu-desktop").classList.contains("menu-desktop_isBurger")) {
    closeBurger();
    
  } else {
    openBurger();

  }
});
