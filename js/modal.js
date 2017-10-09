'use strict';

var modal = function() {
  var modalOpenButtons = Array.prototype.slice.call(document.querySelectorAll('.js-modal-open-button'), 0);
  var openModal;
  var modalCloseButton;
  var modalOverlay;

  /**
   * Код клавиши ESC
   * @constant {number}
   */
  var ESC_KEY_CODE = 27;

  var onModalEscPress = function (evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      evt.preventDefault();
      closeModal();
    }
  };

  document.addEventListener('keydown', onModalEscPress);

  var closeModal = function () {
    openModal.classList.remove('m-open');
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    modalOverlay.removeEventListener('click', onModalOverlayClick);
  }

  var onModalCloseButtonClick = function () {
    if (openModal.classList.contains('m-open')) {
      closeModal();
    }
  };

  /**
   * Клик на подложке модального окна
   * @param {Event} evt - событие
   */
  var onModalOverlayClick = function (evt) {
    if (evt.target.classList.contains('js-modal-overlay') && openModal.classList.contains('m-open')) {
      closeModal();
    }
  };

  /**
   * Клик на кнопку открытия модального окна
   * @param {Event} evt - событие
   */
  var onModalOpenButtonClick = function (evt) {
    evt.preventDefault();

    var modalId = evt.currentTarget.dataset.modal;
    openModal = document.getElementById(modalId);
    modalCloseButton = openModal.querySelector('.js-modal-close-button');
    modalOverlay = openModal.querySelector('.js-modal-overlay');

    openModal.classList.add('m-open');
    modalCloseButton.addEventListener('click', onModalCloseButtonClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
  };

  modalOpenButtons.forEach(function (button) {
    button.addEventListener('click', onModalOpenButtonClick);
  });
}();
