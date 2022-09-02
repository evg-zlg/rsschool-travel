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
    if (e.target.closest(".js-menu_open-login") ) {
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

//обработка клика по картинке из популярных направлений (js-destinations__image)

//сдвинуть слева в центр все картинки
function leftToCenterImage() {
  //смещаем левую картинку в центр
  document.querySelector(".js-destinations__item-left").classList.add("destinations__item-left-to-center");
  //удаляем класс смещения правой картинки в центр (если есть)
  document.querySelector(".js-destinations__item-right").classList.remove("destinations__item-right-to-center");
  //затемняем левую стрелочку
  document.querySelector(".destinations__left-arrow").classList.remove("destinations__arrow_isActive");
  //перекрашиваем нижние круглые кнопки
  document.querySelector(".destinations__buttons").children[0].classList.add("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[1].classList.remove("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[2].classList.remove("destinations__switch-label_isActive");
};

// сдвинуть справа в центр все картинки
function rightToCenterImage() {
  //смещаем правую картинку в центр
  document.querySelector(".js-destinations__item-right").classList.add("destinations__item-right-to-center");
  //удаляем класс смещения правой картинки в центр (если есть)
  document.querySelector(".js-destinations__item-left").classList.remove("destinations__item-left-to-center");
  //затемняем правую стрелочку
  document.querySelector(".destinations__right-arrow").classList.remove("destinations__arrow_isActive");
  //перекрашиваем нижние круглые кнопки
  document.querySelector(".destinations__buttons").children[2].classList.add("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[1].classList.remove("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[0].classList.remove("destinations__switch-label_isActive");
};

// вернуть картинки в исходное состояние
function toCenterImage() {
  //удаляем класс смещения левой картинки в центр (если есть)
  document.querySelector(".js-destinations__item-right").classList.remove("destinations__item-right-to-center");
  //удаляем класс смещения правой картинки в центр (если есть)
  document.querySelector(".js-destinations__item-left").classList.remove("destinations__item-left-to-center");
  //затемняем правую стрелочку
  if ( ! document.querySelector(".destinations__right-arrow").classList.contains("destinations__arrow_isActive")) {
    document.querySelector(".destinations__right-arrow").classList.add("destinations__arrow_isActive");
  }
  if ( ! document.querySelector(".destinations__left-arrow").classList.contains("destinations__arrow_isActive")) {
    document.querySelector(".destinations__left-arrow").classList.add("destinations__arrow_isActive");
  }
  //перекрашиваем нижние круглые кнопки
  document.querySelector(".destinations__buttons").children[1].classList.add("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[0].classList.remove("destinations__switch-label_isActive");
  document.querySelector(".destinations__buttons").children[2].classList.remove("destinations__switch-label_isActive");
};

//клик по левой картинке 
document.querySelector(".js-destinations__item-left").addEventListener("click", (e) => {
  leftToCenterImage(); //функция сдвига картинок вправо
});

//клик по правой картинке 
document.querySelector(".js-destinations__item-right").addEventListener("click", (e) => {
  rightToCenterImage(); //функция сдвига картинок влево
});

//клик по центральной картинке 
document.querySelector(".js-destinations__item-mid").addEventListener("click", (e) => {
  toCenterImage(); //возвращаем в исходное положение
});

//клик по стрелочке влево
document.querySelector(".js-destinations__left-arrow").addEventListener("click", (e) => {
  //проверяем, активна ли кнопка, по которой был клик
  if (e.target.closest(".destinations__arrow_isActive")) {
    //если правая стрелка активна, то сдвигаем картинки вправо
    if (document.querySelector(".js-destinations__right-arrow").classList.contains("destinations__arrow_isActive")) {
      leftToCenterImage(); //функция сдвига картинок вправо
    //если правая стрелка не активна, то возвращаем в исходное состояние
    } else {
      toCenterImage(); 
    }
  }  
});
//клик по стрелочке вправо
document.querySelector(".js-destinations__right-arrow").addEventListener("click", (e) => {
  //проверяем, активна ли кнопка, по которой был клик
  if (e.target.closest(".destinations__arrow_isActive")) {
    //если левая кнопка активна, то сдвигаем картинки влево
    if (document.querySelector(".js-destinations__left-arrow").classList.contains("destinations__arrow_isActive")) {
      rightToCenterImage(); //функция сдвига картинок влево
    //если левая стрелка не активна, то возвращаем в исходное состояние
    } else {
      toCenterImage(); 
    }
  }
});

// обработка кнопкок (круглых) навигации по картинкам destinations
// слушаем клик на группе кнопок
document.querySelector(".destinations__buttons").addEventListener("click", (e) => {
  //если клик по левой - сдвигаем всё вправо
  if (e.target == document.querySelector(".destinations__buttons").children[0]) {
    leftToCenterImage();
  }
  //если клик по центру - возвращаем в исходное состояние
  if (e.target == document.querySelector(".destinations__buttons").children[1]) {
    toCenterImage();
  }
  //если клик по правой - смещаем всё влево
  if (e.target == document.querySelector(".destinations__buttons").children[2]) {
    rightToCenterImage();
  }
});
