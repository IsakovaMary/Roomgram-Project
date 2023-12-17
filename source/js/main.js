const flagButton = document.querySelector('.main-nav__link--language');
const modalFlags = document.querySelector('.modal-flags');
const modalHello = document.querySelector('.modal-hello');

const body = document.querySelector('body');
const modalVideoButton = document.querySelector('.hero-block__text');

const closeButtonVideo = document.querySelector('.modal__close--video');
const closeButtonFlags = document.querySelector('.modal__close--flags');

const isModalOpen = (closeButton, nameModal) => {
    closeButton.classList.remove('visually-hidden');
    nameModal.classList.remove('visually-hidden');
    nameModal.classList.add('modal-open');
    nameModal.classList.add('overlay');

    body.classList.add('modal-open');
};

const isModalClose = (closeButton, nameModal) => {
    closeButton.classList.add('visually-hidden');
    nameModal.classList.add('visually-hidden');

    body.classList.remove('modal-open');
};

// Открытие модального окна языков с флагами

flagButton.addEventListener('click', () => {
    isModalOpen(closeButtonFlags, modalFlags);
    modalFlags.classList.add('overlay--flags');
})


// Открытие окна с видео

modalVideoButton.addEventListener('click', () => isModalOpen(closeButtonVideo, modalHello));

// Закрытие модальных окон

closeButtonVideo.addEventListener('click', () => isModalClose(closeButtonVideo, modalHello));
closeButtonFlags.addEventListener('click', () => isModalClose(closeButtonFlags, modalFlags));

// Скролл кнопки вверх

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку

    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });