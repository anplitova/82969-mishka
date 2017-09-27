var menu = function() {
  var menuButton = document.querySelector('.js-menu-button');
  var menuList = document.querySelector('.js-menu-list');

  menuList.classList.add('m-absolute');

  var onMenuButtonClick = function() {
    menuList.classList.toggle('m-open');
    menuButton.classList.toggle('m-open');
  };

  menuButton.addEventListener('click', onMenuButtonClick);
}();
