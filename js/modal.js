document.addEventListener("DOMContentLoaded", function () {
  var consultationButton = document.getElementById("consultationButton");
  var contactModal = document.getElementById("contactModal");
  var closeModal = document.getElementById("closeModal");

  // Обработчик клика по кнопке консультации
  consultationButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    contactModal.classList.remove("d-none"); // Показываем модальное окно
  });

  // Обработчик клика по кнопке закрытия модального окна
  closeModal.addEventListener("click", function () {
    contactModal.classList.add("d-none"); // Скрываем модальное окно
  });

  // Обработчик клика по фону модального окна для его закрытия
  window.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      contactModal.classList.add("d-none"); // Скрываем модальное окно
    }
  });
});
