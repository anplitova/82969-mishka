'use strict';

var menu = function() {
  document.documentElement.classList.remove('no-js');

  var menuButton = document.querySelector('.js-menu-button');
  var menuList = document.querySelector('.js-menu-list');

  var onMenuButtonClick = function() {
    menuList.classList.toggle('m-open');
    menuButton.classList.toggle('m-open');
  };

  menuButton.addEventListener('click', onMenuButtonClick);
}();
